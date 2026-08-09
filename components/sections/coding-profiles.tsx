"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { TechIcon } from "@/components/icons";
import { Skeleton } from "@/components/ui/skeleton";

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
      try {
        const res = await fetch("https://leetcode-api-faisalshohag.vercel.app/Anish_Kumar_");
        if (res.ok) {
          const data = await res.json();
          if (data && data.totalSolved !== undefined) {
            const totalSolved = data.totalSolved;
            const ranking = data.ranking ? `${data.ranking.toLocaleString()}` : "359,102";
            const totalSub = data.totalSubmissions?.[0]?.submissions;
            const acceptanceRate = totalSub
              ? `${Math.round((totalSolved / totalSub) * 100)}%`
              : "62%";

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
    <section
      id="coding"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6 text-foreground">
            Coding Profiles
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-light text-muted-foreground max-w-2xl mx-auto px-4">
            My competitive programming journey and problem-solving statistics
            across various platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {profiles.map((profile, index) => (
            <div
              key={profile.platform}
              className="animate-fade-in-up transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-secondary/50 border-border rounded-2xl overflow-hidden group">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-background rounded-xl text-primary flex items-center justify-center">
                        <TechIcon name={profile.iconName} className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {profile.platform}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          @{profile.username}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6 flex-grow">
                    {Object.entries(profile.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="text-muted-foreground">{key}</span>
                        {loading[profile.platform] ? (
                          <Skeleton className="h-5 w-16" />
                        ) : (
                          <span className="font-medium text-foreground">
                            {value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                    asChild
                  >
                    <a
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
