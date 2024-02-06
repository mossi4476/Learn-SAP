sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'student',
            componentId: 'StudentsSRVList',
            contextPath: '/StudentsSRV'
        },
        CustomPageDefinitions
    );
});