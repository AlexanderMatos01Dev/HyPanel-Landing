---
title: 'Understanding Latency, Ping, and TPS'
excerpt: 'Lag is not always what you think it is. Learn to diagnose network vs server lag.'
date: 2024-09-10
readTime: '8 min'
category: 'Technology'
gradient: 'from-[#6366F1]/80 to-[#4F46E5]/80'
---

<p class="lead">"Server is lagging!" - Every player ever. But is it?</p>

## TPS (Ticks Per Second)
This is the server's heartbeat. It should be 20. If it's 15, the server is thinking too slow. This is usually caused by too many entities or bad plugins.

## Ping (Latency)
This is the travel time for data. If TPS is 20 but players are rubberbanding, it's a network issue. Check your region. Don't host in Europe if your players are in Brazil.
