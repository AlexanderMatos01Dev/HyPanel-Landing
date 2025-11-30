---
title: 'Automating Restarts with HyPanel'
excerpt: 'Keep your server fresh with scheduled restarts and automated warnings.'
date: 2024-08-10
readTime: '4 min'
category: 'Tutorial'
gradient: 'from-[#F97316]/80 to-[#EA580C]/80'
---

<p class="lead">Memory leaks happen. A daily restart is the best medicine.</p>

## Schedules
Set up a cron job in HyPanel: `0 4 * * *` (Every day at 4 AM).

## Webhooks
HyPanel can automatically post to your Discord: "Server restarting in 5 minutes!".
