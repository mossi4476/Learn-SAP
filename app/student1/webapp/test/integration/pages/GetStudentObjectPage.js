sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'student1.student1',
            componentId: 'GetStudentObjectPage',
            contextPath: '/GetStudent'
        },
        CustomPageDefinitions
    );
});