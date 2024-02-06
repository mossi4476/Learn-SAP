using myCompany.hr.lms from '../db/Students';

service mysrvdemo @(require: 'authenticated-user'){
    
    
    entity GetStudent @(restrict: [
    { grant: ['*'],
      to: 'StudentAdmin' },
      { grant: ['READ'],
      to: 'StudentRead' }
    ]) as projection on lms.Students;

    
    entity StudentsSRV @(restrict: [
    { grant: ['*'],
      to: 'StudentAdmin' },
      { grant: ['READ'],
      to: 'StudentRead' }
    ]) as projection on lms.Students;

   
    entity UpdateStudent @(restrict: [
    { grant: ['*'],
      to: 'StudentAdmin' }
    ]) as projection on lms.Students;

   
    entity InsertStudent @(restrict: [
    { grant: ['*'],
      to: 'StudentAdmin' }
    ])as projection on lms.Students;

   
    entity DeleteStudent @(restrict: [
    { grant: ['*'],
      to: 'StudentAdmin' }
    ])as projection on lms.Students;

    function myfoobar(msg:String) returns String;
}