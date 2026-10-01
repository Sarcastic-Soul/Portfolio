"use client";

import { useState, useEffect } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { TechIcon } from "@/components/icons";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionHeading } from "@/components/sections/section-heading";

interface Profile {
  platform: string;
  username: string;
  link: string;
  iconName: string;
  stats: Record<string, string | number>;
}

// Fallback static data
const initialProfiles: Profile[] = [
  {
    platform: "LeetCode",
    username: "Anish_Kumar_",
    link: "https://leetcode.com/u/Anish_Kumar_/",
    iconName: "LeetCode",
    stats: {
      "Problems Solved": "365+",
      "Global Ranking": "359,102",
      "Acceptance Rate": "62%",
    },
  },
  {
    platform: "Codeforces",
    username: "Sarcastic-Soul",
    link: "https://codeforces.com/profile/Sarcastic-Soul",
    iconName: "Codeforces",
    stats: {
      Rating: "1300+",
      "Max Rating": "1342",
      Rank: "PUPIL",
    },
  },
  {
    platform: "GitHub",
    username: "Sarcastic-Soul",
    link: "https://github.com/Sarcastic-Soul",
    iconName: "GitHub",
    stats: {
      "Total Commits": "500+",
      "Public Repos": "25+",
      Followers: "10+",
    },
  },
];

export function CodingProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles);
  const [loading, setLoading] = useState<Record<string, boolean>>({
    LeetCode: true,
    Codeforces: true,
    GitHub: true,
  });

  useEffect(() => {
    // 1. Fetch LeetCode
    (async () => {
      // Free-tier host, so cold starts are common. Cap the wait and keep the
      // static numbers rather than leaving the skeleton up indefinitely.
      const signal = AbortSignal.timeout(10000);
      const api = "https://alfa-leetcode-api.onrender.com/";

      try {
        const res = await fetch(`${api}userProfile/Anish_Kumar_`, { signal });
        if (res.ok) {
          const data = await res.json();
          if (data && data.totalSolved !== undefined) {
            const totalSolved = data.totalSolved;
            const ranking = data.ranking ? `${data.ranking.toLocaleString()}` : "359,102";

            // Acceptance rate needs the accepted-vs-total submission split, which
            // only /solved reports; /userProfile carries the totals but not the split.
            let acceptanceRate = "62%";
            try {
              const solvedRes = await fetch(`${api}Anish_Kumar_/solved`, { signal });
              if (solvedRes.ok) {
                const solved = await solvedRes.json();
                const accepted = solved?.acSubmissionNum?.[0]?.submissions;
                const total = solved?.totalSubmissionNum?.[0]?.submissions;
                if (accepted && total) {
                  acceptanceRate = `${Math.round((accepted / total) * 100)}%`;
                }
              }
            } catch {
              // keep the fallback
            }

            setProfiles((prev) =>
              prev.map((p) =>
                p.platform === "LeetCode"
                  ? {
                      ...p,
                      stats: {
                        "Problems Solved": `${totalSolved}+`,
                        "Global Ranking": ranking,
                        "Acceptance Rate": acceptanceRate,
                      },
                    }
                  : p
              )
            );
          }
        }
      } catch (err) {
        console.warn("LeetCode fetch error:", err);
      } finally {
        setLoading((prev) => ({ ...prev, LeetCode: false }));
      }
    })();

    // 2. Fetch Codeforces
    (async () => {
      try {
        const res = await fetch("https://codeforces.com/api/user.info?handles=Sarcastic-Soul");
        if (res.ok) {
          const data = await res.json();
          if (data && data.status === "OK" && data.result?.[0]) {
            const user = data.result[0];
            setProfiles((prev) =>
              prev.map((p) =>
                p.platform === "Codeforces"
                  ? {
                      ...p,
                      stats: {
                        Rating: user.rating || "Unrated",
                        "Max Rating": user.maxRating || "Unrated",
                        Rank: user.rank ? user.rank.toUpperCase() : "UNRATED",
                      },
                    }
                  : p
              )
            );
          }
        }
      } catch (err) {
        console.warn("Codeforces fetch error:", err);
      } finally {
        setLoading((prev) => ({ ...prev, Codeforces: false }));
      }
    })();

    // 3. Fetch GitHub
    (async () => {
      try {
        const ghRes = await fetch("https://api.github.com/users/Sarcastic-Soul");
        let publicRepos: string | number = "25+";
        let followers: string | number = "10+";
        if (ghRes.ok) {
          const ghData = await ghRes.json();
          if (ghData) {
            publicRepos = ghData.public_repos ?? publicRepos;
            followers = ghData.followers ?? followers;
          }
        }

        let totalCommits = "500+";
        try {
          const contribRes = await fetch("https://github-contributions-api.jogruber.de/v4/Sarcastic-Soul?y=last");
          if (contribRes.ok) {
            const contribData = await contribRes.json();
            if (contribData?.total?.lastYear !== undefined) {
              totalCommits = `${contribData.total.lastYear}+`;
            }
          }
        } catch {
          // ignore
        }

        setProfiles((prev) =>
          prev.map((p) =>
            p.platform === "GitHub"
              ? {
                  ...p,
                  stats: {
                    "Total Commits": totalCommits,
                    "Public Repos": publicRepos,
                    Followers: followers,
                  },
                }
              : p
          )
        );
      } catch (err) {
        console.warn("GitHub fetch error:", err);
      } finally {
        setLoading((prev) => ({ ...prev, GitHub: false }));
      }
    })();
  }, []);

  return (
    <section id="coding" className="px-4 py-20 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          command="curl stats"
          title="Coding profiles"
          intro="Live numbers, pulled from each site when the page loads."
        />

        <div className="grid grid-cols-1 border-t border-border md:grid-cols-3">
          {profiles.map((profile) => (
            <div
              key={profile.platform}
              className="flex flex-col gap-5 border-b border-border/60 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <div className="flex items-center gap-3">
                <TechIcon name={profile.iconName} className="h-6 w-6" />
                <div>
                  <h3 className="text-lg font-bold text-foreground">{profile.platform}</h3>
                  <p className="text-sm text-muted-foreground">@{profile.username}</p>
                </div>
              </div>

              <dl className="flex-grow space-y-2.5 text-sm">
                {Object.entries(profile.stats).map(([key, value]) => (
                  <div key={key} className="flex items-baseline justify-between gap-4">
                    <dt className="text-muted-foreground">{key.toLowerCase()}</dt>
                    <dd className="text-foreground">
                      {loading[profile.platform] ? <Skeleton className="h-5 w-16" /> : value}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-brand"
              >
                View profile
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
