import type { CpuInfo } from "os";
import { z } from "zod";

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

export const Schema = z.any();

export type SchemaType = z.infer<typeof Schema>;
