import type { Parameter } from "@/platform/interfaces/ParameterInterface";

export interface Championship {
  id: string;
  category: Parameter;
  gender: number;
  management: number;
  name: Parameter;
  state: number;
  version: number;
  teamsCount?: number;
  progress?: number;
}
