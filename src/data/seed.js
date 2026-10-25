export const roles = {
  owner:{label:'مالك المستشفى',en:'Hospital Owner',name:'Demo Owner',initials:'م.م'},
  admin:{label:'مسؤول النظام التقني',en:'System Admin',name:'Demo Admin',initials:'ن.ت'},
  manager:{label:'الإدارة العليا',en:'Management',name:'Demo Manager',initials:'م.إ'},
  doctor:{label:'طبيب',en:'Doctor',name:'Demo Doctor',initials:'ط.د'},
  nurse:{label:'تمريض',en:'Nurse',name:'Demo Nurse',initials:'م.ر'},
  receptionist:{label:'موظف الاستقبال',en:'Receptionist',name:'Demo Receptionist',initials:'ا.م'},
  patient:{label:'مريض',en:'Patient',name:'Demo Patient',initials:'م.س'}
};
export const seed = {
 patients:[
  {id:'P-1001',name:'ليان محمود',age:34,phone:'09XX XXX 241',department:'القلبية',allergies:'لا يوجد مسجل',chronic:'—',status:'نشط',joined:'2026-10-04',visits:4},
  {id:'P-1002',name:'سامر خليل',age:58,phone:'09XX XXX 582',department:'الباطنة',allergies:'البنسلين',chronic:'ارتفاع ضغط الدم',status:'نشط',joined:'2026-10-09',visits:7},
  {id:'P-1003',name:'نور فهد',age:26,phone:'09XX XXX 113',department:'الجلدية',allergies:'—',chronic:'—',status:'نشط',joined:'2026-10-12',visits:2},
  {id:'P-1004',name:'فادي ناصر',age:46,phone:'09XX XXX 447',department:'العظمية',allergies:'اللاتكس',chronic:'—',status:'نشط',joined:'2026-10-15',visits:3},
  {id:'P-1005',name:'رنا علي',age:41,phone:'09XX XXX 926',department:'القلبية',allergies:'—',chronic:'سكري نوع 2',status:'نشط',joined:'2026-10-20',visits:5},
  {id:'P-1006',name:'كريم حسن',age:19,phone:'09XX XXX 364',department:'الباطنة',allergies:'—',chronic:'—',status:'نشط',joined:'2026-10-21',visits:1}
 ],
 staff:[
  {id:'S-001',name:'د. يزن الحسن',role:'doctor',title:'اختصاصي قلبية',department:'القلبية',shift:'صباحية',status:'على رأس العمل',phone:'09XX XXX 101'},
  {id:'S-002',name:'د. سارة ناصر',role:'doctor',title:'اختصاصية باطنية',department:'الباطنة',shift:'مسائية',status:'على رأس العمل',phone:'09XX XXX 102'},
  {id:'S-003',name:'الممرضة جود علي',role:'nurse',title:'ممرضة مسؤولة',department:'القلبية',shift:'صباحية',status:'على رأس العمل',phone:'09XX XXX 103'},
  {id:'S-004',name:'الممرض سامي فهد',role:'nurse',title:'تمريض سريري',department:'الباطنة',shift:'ليلية',status:'على رأس العمل',phone:'09XX XXX 104'},
  {id:'S-005',name:'ريم محمود',role:'receptionist',title:'موظفة استقبال',department:'الاستقبال',shift:'صباحية',status:'على رأس العمل',phone:'09XX XXX 105'},
  {id:'S-006',name:'مروان خليل',role:'manager',title:'مدير العمليات',department:'الإدارة',shift:'صباحية',status:'على رأس العمل',phone:'09XX XXX 106'}
 ],
 appointments:[
  {id:'A-2401',patientId:'P-1001',patient:'ليان محمود',doctor:'د. يزن الحسن',department:'القلبية',date:'2026-10-25',time:'09:00',duration:30,status:'مؤكد'},
  {id:'A-2402',patientId:'P-1002',patient:'سامر خليل',doctor:'د. سارة ناصر',department:'الباطنة',date:'2026-10-25',time:'09:30',duration:30,status:'وصل المريض'},
  {id:'A-2403',patientId:'P-1003',patient:'نور فهد',doctor:'د. يزن الحسن',department:'الجلدية',date:'2026-10-25',time:'10:00',duration:30,status:'مجدول'},
  {id:'A-2404',patientId:'P-1004',patient:'فادي ناصر',doctor:'د. سارة ناصر',department:'العظمية',date:'2026-10-26',time:'11:00',duration:30,status:'مجدول'},
  {id:'A-2405',patientId:'P-1005',patient:'رنا علي',doctor:'د. يزن الحسن',department:'القلبية',date:'2026-10-27',time:'10:30',duration:30,status:'مؤكد'},
  {id:'A-2406',patientId:'P-1006',patient:'كريم حسن',doctor:'د. سارة ناصر',department:'الباطنة',date:'2026-10-20',time:'12:00',duration:30,status:'مكتمل'},
  {id:'A-2407',patientId:'P-1001',patient:'ليان محمود',doctor:'د. يزن الحسن',department:'القلبية',date:'2026-10-15',time:'09:00',duration:30,status:'مكتمل'},
  {id:'A-2408',patientId:'P-1002',patient:'سامر خليل',doctor:'د. سارة ناصر',department:'الباطنة',date:'2026-09-18',time:'11:30',duration:30,status:'لم يحضر'}
 ],
 rooms:[
  {id:'104',type:'غرفة مزدوجة',department:'القلبية',beds:2,occupied:2,status:'مشغولة'},
  {id:'103',type:'غرفة مفردة',department:'الباطنة',beds:1,occupied:0,status:'متاحة'},
  {id:'102',type:'غرفة مزدوجة',department:'العظمية',beds:2,occupied:0,status:'تحت الصيانة'},
  {id:'105',type:'غرفة مزدوجة',department:'الباطنة',beds:2,occupied:1,status:'مشغولة جزئياً'},
  {id:'201',type:'غرفة مفردة',department:'القلبية',beds:1,occupied:0,status:'محجوزة'},
  {id:'202',type:'غرفة مزدوجة',department:'الجراحة',beds:2,occupied:1,status:'مشغولة جزئياً'}
 ],
 theatres:[
  {id:'OR-01',type:'جراحة عامة',status:'متاحة',next:'—',team:'—'},
  {id:'OR-02',type:'جراحة عظمية',status:'محجوزة',next:'26 أكتوبر · 10:00',team:'فريق العظمية'},
  {id:'OR-03',type:'إجراءات تخصصية',status:'تنظيف وتعقيم',next:'—',team:'—'}
 ],
 equipment:[
  {id:'EQ-101',name:'جهاز مراقبة العلامات الحيوية',category:'مراقبة',department:'القلبية',status:'متاح',maintenance:'2026-11-10'},
  {id:'EQ-102',name:'جهاز تخطيط القلب ECG',category:'تشخيص',department:'القلبية',status:'قيد الاستخدام',maintenance:'2026-11-15'},
  {id:'EQ-103',name:'جهاز غسيل الكلى',category:'علاج',department:'غسيل الكلى',status:'قيد الاستخدام',maintenance:'2026-11-01'},
  {id:'EQ-104',name:'جهاز غسيل الكلى',category:'علاج',department:'غسيل الكلى',status:'قيد الاستخدام',maintenance:'2026-11-04'},
  {id:'EQ-105',name:'جهاز غسيل الكلى',category:'علاج',department:'غسيل الكلى',status:'متاح',maintenance:'2026-11-20'},
  {id:'EQ-106',name:'جهاز تصوير بالأمواج فوق الصوتية',category:'تصوير',department:'التصوير',status:'تحت الصيانة',maintenance:'2026-10-28'},
  {id:'EQ-107',name:'مضخة حقن',category:'علاج',department:'الباطنة',status:'خارج الخدمة',maintenance:'—'}
 ],
 alerts:[
  {id:1,type:'صيانة',priority:'عالية',title:'جهاز تصوير يحتاج إلى متابعة',detail:'EQ-106 · قسم التصوير',time:'منذ 18 دقيقة',read:false},
  {id:2,type:'جدولة',priority:'متوسطة',title:'موعدان يحتاجان إلى تأكيد',detail:'عيادة الباطنة · اليوم',time:'منذ 42 دقيقة',read:false},
  {id:3,type:'موارد بشرية',priority:'متوسطة',title:'مراجعة تغطية الوردية المسائية',detail:'قسم القلبية',time:'منذ ساعة',read:true},
  {id:4,type:'غرف',priority:'منخفضة',title:'الغرفة 102 تحت الصيانة',detail:'قسم العظمية',time:'منذ ساعتين',read:true}
 ],
 activity:[{id:1,user:'Demo Manager',action:'مراجعة حالة غرفة',target:'الغرفة 102',time:'اليوم، 14:20'},{id:2,user:'Demo Receptionist',action:'تأكيد موعد',target:'A-2401',time:'اليوم، 13:55'},{id:3,user:'Demo Nurse',action:'تحديث متابعة تمريضية',target:'القلبية',time:'اليوم، 12:40'}],
 shifts:[{id:'SH-01',name:'الوردية الصباحية',time:'08:00 – 14:00',department:'القلبية',staff:4,needed:4},{id:'SH-02',name:'الوردية المسائية',time:'14:00 – 20:00',department:'الباطنة',staff:3,needed:4},{id:'SH-03',name:'الوردية الليلية',time:'20:00 – 08:00',department:'التمريض',staff:2,needed:3}],
 settings:{appointmentDuration:30,buffer:10}
};
