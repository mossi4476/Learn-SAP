using mysrvdemoapp as service from '../../srv/mysimplesrv';

annotate service.GetStudent with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'email',
            Value : email,
        },
        {
            $Type : 'UI.DataField',
            Label : 'first_name',
            Value : first_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'last_name',
            Value : last_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'date_sign_up',
            Value : date_sign_up,
        },
    ]
);
annotate service.GetStudent with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'email',
                Value : email,
            },
            {
                $Type : 'UI.DataField',
                Label : 'first_name',
                Value : first_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'last_name',
                Value : last_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'date_sign_up',
                Value : date_sign_up,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
