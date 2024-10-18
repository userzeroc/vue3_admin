import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// 获取项目目录
export function getRootPath() {
  return path.resolve(process.cwd());
}
// 获取项目src目录
export function getSrcPath(srcName = "src") {
  return path.resolve(getRootPath(), srcName);
}

// 配置文件数据转换
export function convertEnv(envOptions) {
  const result = {};
  if (!envOptions) return result;

  for (const envKey in envOptions) {
    let envVal = envOptions[envKey];
    if (["true", "false"].includes(envVal)) envVal = envVal === "true";

    if (["VITE_PORT"].includes(envKey)) envVal = +envVal;

    result[envKey] = envVal;
  }
  return result;
}
