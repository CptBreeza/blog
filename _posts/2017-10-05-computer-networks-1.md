---
layout: post
title: Computer Networks 1
author: CptBreeza
date: 2017-10-05 23:56:20 +0800
tag: notes
---

## Core Concepts

- **End system** connects by **communication link** and **packet switch**
- 2 types of packet switch
  1.  **router**
  2. **link-layer switch**
- End system can access internet through **ISP**(Internet Service Provider)

## Packet Switching

- Most packet switches use store-and-forward transmission at the input end

  which introduces L/R delay.

- Packet switch has a output buffer(output queue) for every link

  which introduces queue delay.

- 4 types of delay in packet switching networks

  1. nodal process delay
  2. queueing delay
  3. transmission delay
  4. propagation delay

- The router will drop the packet when the output buffer is full(**packet loss**)

- The **throughput** equals to the minimal of the transmission rate of the path

## Layered Protocol

Layer | Protocols | Packet
------| --------- | ------
Application Layer | HTTP/FTP/SMTP/DNS | message
Transport Layer | TCP/UDP | segment
Network Layer | IP | datagram
Data Link Layer | ARP | frame
Physical Layer | | bit

## HTTP Protocol

- HTTP Protocol builds on top of **TCP Protocol**
- HTTP over persistent connection and unpersistent connection
- HTTP uses Cookie to store states

## DNS

- DNS builds on top of **UDP Protocol**
- 3 types of frequently used DNS record
  1. A record
  2. CNAME record 
  3. MX record

## References
- Computer Networks - A Top-Down Approach
- [List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types)
