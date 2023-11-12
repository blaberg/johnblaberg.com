---
author: "John Blåberg Kristoffersson"
title: "SQL Style Guide"
date: "2023-11-12"
description: "A basic style guide for SQL that I use for my personal projects."
tags: [
    "tech",
]
---
*I recently had to learn the fundamentals of DBT and how to create a useful data pipeline. While reading up on DBT, I also decided to read up on some SQL best practices. This document compiles the rules that I’ve found to be the most useful, with some additional rules that fit my coding style. *

---

## Guiding Principle

> **Optimize primarily for readability, maintainability, and robustness rather than for fewer lines of code.**
>
> Newlines are cheap; people's time is expensive.
>

People looove this quote.

## General Guidelines

- **Always capitalize SQL keywords.**\
This one wasn’t as obvious as I thought it would be. Of the articles that I read, there was only a slim majority that preferred capitalization on SQL keywords. The argument against it is that lowercase keywords are just as readable and you don’t have to constantly hold down your shift key. While I agree with this, I’m going to be traditional and go the uppercase route.
- **Lines should not be longer than 120 characters. This includes comments.**\
In the articles I read the single-line character limit was usually around 100 characters, some above and some below. However, since I mainly write Go code, and the default max length for a line in [golangci-lint is 120 characters](https://golangci-lint.run/usage/linters/#lll), I’m going with 120 characters.
- **Aliases and CTEs names should be `snake_case`.**
- **Prefer `!=` to `<>`.**\
I didn’t even know you could use `<>`.
- **Prefer `WHERE` to `HAVING` when either would suffice.**\
This is a rule that was present in most articles. While I initially thought it was for readability, it has [performance benefits](https://github.com/brooklyn-data/co/blob/main/sql_style_guide.md#use-where-instead-of-having-when-either-would-suffice).
- **Always use standard SQL keywords instead of platform-specific keywords** \
For example, use `is null` instead of `isnull`,`is not null` instead of `notnull`, and `case` statement instead of `iff` or `if`. There are exceptions to this rule, but this should be the ambition.

## Naming conventions

- **Use `AS` to alias column names.**
- **Timestamps should end with `_at`, e.g. `deal_closed_at`, and always be in UTC.**
- **Dates should end with `_date`, e.g. `deal_closed_date`.**
- **Boolean field names should start with `has_`, `is_`, or `does_`.**
- **ID fields should be prefixed with the name of the resource that the ID belongs to.**\
For instance, a `users` table should have the ID field `user_id`. Then, if another table has a reference to a user, that field should also be called `user_id`. This makes it incredibly easy to join tables using `USING`. This is probably my most controversial opinion, using `USING` was even explicitly refrained from in multiple articles, but I’ve found it to be very useful.

## Common Table Expressions (CTEs)

- **Multiple CETs are better than large `SELECT` statements.**\
Large `SELECT` statements are much harder to read than multiple CTEs. If performance becomes an issue the CTEs can always be merged.
- **Use CTEs to reference other tables.**\
Think of them as import statements. This also lets you do some light filtering if you want.
- **CTEs should be placed at the top of the query.**
- **Models with CTEs should always end with a CTE called final and the statement `SELECT * FROM final`.**

Sources:
1. https://about.gitlab.com/handbook/business-technology/data-team/platform/sql-style-guide/
2. https://github.com/brooklyn-data/co/blob/main/sql_style_guide.md#optimize-primarily-for-readability-maintainability-and-robustness-rather-than-for-fewer-lines-of-code
3. https://handbook.meltano.com/data-team/sql-style-guide
4. https://gist.github.com/fredbenenson/7bb92718e19138c20591
5. https://docs.getdbt.com/guides/best-practices/how-we-style/0-how-we-style-our-dbt-projects
6. https://github.com/mattm/sql-style-guide
