"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { TechIcon } from "@/components/tech-icon";

interface Profile {
  platform: string;
  username: string;
  link: string;
  iconName: string;
  stats: Record<string, string | number>;
}

// Initial static data
const initialProfiles: Profile[] = [
  {
    platform: "LeetCode",
    username: "Anish_Kumar_",
    link: "https://leetcode.com/u/Anish_Kumar_/",
    iconName: "LeetCode",
    stats: {
      "Problems Solved": "Loading...",
      "Global Ranking": "Loading...",
      "Acceptance Rate": "Loading...",
    },
  },
  {
    platform: "Codeforces",
    username: "Sarcastic-Soul",
    link: "https://codeforces.com/profile/Sarcastic-Soul",
    iconName: "Codeforces",
    stats: {
      Rating: "Loading...",
      "Max Rating": "Loading...",
      Rank: "Loading...",
    },
  },
  {
    platform: "GitHub",
    username: "Sarcastic-Soul",
    link: "https://github.com/Sarcastic-Soul",
    iconName: "GitHub",
    stats: {
      "Total Commits": "Loading...",
      "Public Repos": "Loading...",
      Followers: "Loading...",
    },
  },
];

export function CodingProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles);

  useEffect(() => {
    async function fetchStats() {
      const CACHE_KEY = "coding_profiles_stats";
      const CACHE_DURATION = 1000 * 60 * 60; // 1 Hour

      // 1. Check Cache
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const { timestamp, data } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            // FIX: Merge cached stats with the static profiles (which have the icons)
            const restoredProfiles = initialProfiles.map((profile, index) => ({
              ...profile,
              stats: data[index].stats, // Only take the stats from cache
            }));
            setProfiles(restoredProfiles);
            return;
          }
        } catch (e) {
          console.error("Cache parsing error", e);
          localStorage.removeItem(CACHE_KEY);
        }
      }

      // 2. Prepare for Fetching (Clone properly to avoid mutating global var)
      const updatedProfiles = initialProfiles.map((p) => ({
        ...p,
        stats: { ...p.stats },
      }));

      // Fetch LeetCode
      try {
        const lcRes = await fetch(
          "https://leetcode-stats-api.herokuapp.com/Anish_Kumar_",
        );
        if (lcRes.ok) {
          const lcData = await lcRes.json();
          if (lcData.status === "success") {
            updatedProfiles[0].stats = {
              "Problems Solved": lcData.totalSolved || "N/A",
              "Global Ranking": lcData.ranking || "N/A",
              "Acceptance Rate": lcData.acceptanceRate
                ? `${lcData.acceptanceRate}%`
                : "N/A",
            };
          }
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode:", error);
      }

      // Fetch Codeforces
      try {
        const cfRes = await fetch(
          "https://codeforces.com/api/user.info?handles=Sarcastic-Soul",
        );
        const cfData = await cfRes.json();
        if (cfData.status === "OK" && cfData.result.length > 0) {
          const user = cfData.result[0];
          updatedProfiles[1].stats = {
            Rating: user.rating || "Unrated",
            "Max Rating": user.maxRating || "Unrated",
            Rank: user.rank ? user.rank.toUpperCase() : "Unrated",
          };
        }
      } catch (error) {
        console.error("Failed to fetch Codeforces:", error);
      }

      // Fetch GitHub
      try {
        const ghRes = await fetch(
          "https://api.github.com/users/Sarcastic-Soul",
        );
        const ghData = await ghRes.json();

        const contribRes = await fetch(
          "https://github-contributions-api.jogruber.de/v4/Sarcastic-Soul?y=last",
        );
        const contribData = await contribRes.json();
        const totalCommits = contribData?.total?.lastYear || "N/A";

        if (ghData) {
          updatedProfiles[2].stats = {
            "Total Commits": totalCommits,
            "Public Repos": ghData.public_repos || 0,
            Followers: ghData.followers || 0,
          };
        }
      } catch (error) {
        console.error("Failed to fetch GitHub:", error);
      }

      // Update State
      setProfiles(updatedProfiles);

      // Save to Cache (Only stats will be valid JSON, icons are lost here)
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), data: updatedProfiles }),
      );
    }

    fetchStats();
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
                        <span className="font-medium text-foreground">
                          {value}
                        </span>
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
