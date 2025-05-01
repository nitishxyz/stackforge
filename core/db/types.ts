import type { trendSummaries, tweetImages } from "./schema";
import type { trendTweets } from "./schema";
import type { trends } from "./schema";

// Import the v2 schema tables
import type {
  twitterAccountsV2,
  twitterTrendsV2,
  twitterTweetsV2,
  twitterMediaV2,
  twitterUrlsV2,
  twitterMentionsV2,
  twitterHashtagsV2,
} from "./schema";

export type Trend = typeof trends.$inferSelect;
export type NewTrend = typeof trends.$inferInsert;

export type TrendSummary = typeof trendSummaries.$inferSelect;
export type NewTrendSummary = typeof trendSummaries.$inferInsert;

export type TrendTweet = typeof trendTweets.$inferSelect;
export type NewTrendTweet = typeof trendTweets.$inferInsert;

export type TweetImage = typeof tweetImages.$inferSelect;
export type NewTweetImage = typeof tweetImages.$inferInsert;

// Add v2 types
export type TwitterAccountV2 = typeof twitterAccountsV2.$inferSelect;
export type NewTwitterAccountV2 = typeof twitterAccountsV2.$inferInsert;

export type TwitterTrendV2 = typeof twitterTrendsV2.$inferSelect;
export type NewTwitterTrendV2 = typeof twitterTrendsV2.$inferInsert;

export type TwitterTweetV2 = typeof twitterTweetsV2.$inferSelect;
export type NewTwitterTweetV2 = typeof twitterTweetsV2.$inferInsert;

// Add new types for entities
export type TwitterMediaV2 = typeof twitterMediaV2.$inferSelect;
export type NewTwitterMediaV2 = typeof twitterMediaV2.$inferInsert;

export type TwitterUrlV2 = typeof twitterUrlsV2.$inferSelect;
export type NewTwitterUrlV2 = typeof twitterUrlsV2.$inferInsert;

export type TwitterMentionV2 = typeof twitterMentionsV2.$inferSelect;
export type NewTwitterMentionV2 = typeof twitterMentionsV2.$inferInsert;

export type TwitterHashtagV2 = typeof twitterHashtagsV2.$inferSelect;
export type NewTwitterHashtagV2 = typeof twitterHashtagsV2.$inferInsert;
