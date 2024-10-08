import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"
import { SERVER, TIME } from '@l/var'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const instance = axios.create({
  baseURL: SERVER,
  timeout: parseInt(TIME),
})