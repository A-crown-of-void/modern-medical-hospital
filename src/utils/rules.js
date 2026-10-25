export const activeStatuses=['مجدول','مؤكد','وصل المريض','قيد المعالجة','يتطلب إعادة الجدولة'];
export function appointmentConflict(items,candidate,excludeId=null,buffer=10){const start=toMinutes(candidate.time),end=start+Number(candidate.duration||30);return items.find(a=>a.id!==excludeId&&a.date===candidate.date&&a.doctor===candidate.doctor&&activeStatuses.includes(a.status)&&overlap(start-buffer,end+buffer,toMinutes(a.time),toMinutes(a.time)+Number(a.duration||30)+buffer));}
function toMinutes(t){const [h,m]=t.split(':').map(Number);return h*60+m}
function overlap(a,b,c,d){return a<d&&c<b}
export const statusClass=s=>({'مؤكد':'success','مكتمل':'success','متاح':'success','متاحة':'success','مجدول':'info','وصل المريض':'info','قيد المعالجة':'info','مشغولة':'warning','مشغولة جزئياً':'warning','محجوزة':'warning','قيد الاستخدام':'info','تحت الصيانة':'danger','خارج الخدمة':'danger','لم يحضر':'danger','ملغى':'muted','يتطلب إعادة الجدولة':'danger','تنظيف وتعقيم':'warning'}[s]||'muted');
