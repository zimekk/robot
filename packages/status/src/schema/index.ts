import type { CpuInfo } from "os";

export type StatusType = {
  databases: {
    name: string;
    size: string;
  }[];
  cpus: CpuInfo[];
  freemem: number;
  totalmem: number;
  hostname: string;
  loadavg: number[];
  platform: NodeJS.Platform;
  type: string;
  uptime: number;
  usage: string[];
};
