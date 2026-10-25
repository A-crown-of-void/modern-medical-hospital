import {seed} from '../data/seed';
const KEY='mmh-demo-state-v1';
export function loadState(){try{const v=localStorage.getItem(KEY);return v?JSON.parse(v):structuredClone(seed)}catch{return structuredClone(seed)}}
export function saveState(v){try{localStorage.setItem(KEY,JSON.stringify(v))}catch{}}
export function resetState(){localStorage.removeItem(KEY);return structuredClone(seed)}
export function audit(state,user,action,target){return {...state,activity:[{id:Date.now(),user,action,target,time:new Date().toLocaleString('ar-SY',{dateStyle:'short',timeStyle:'short'})},...state.activity].slice(0,80)}}
