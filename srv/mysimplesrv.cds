using myCompany.hr.lms from '../db/Students';
using {Currency} from '@sap/cds/common';
using { myCompany.hr.lms1 as lms1 } from '../db/Structure';

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

service mysrvdemoapp{
    
     @readonly entity GetStudent as projection on lms1.Students;
     @readonly entity GetCourse as projection on lms1.Courses;
     @readonly entity GetEnrollment as projection on lms1.Enrollments;
     @readonly entity GetContent as projection on lms1.Contents;
    

}