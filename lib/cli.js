import fs from 'fs';
import { trackIncome } from './tracker/income.js';
const report = trackIncome();
console.log(JSON.stringify(report, null, 2));
