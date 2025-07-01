function enableFields(form){
    // Desabilita todos os campos por padrão:
    var allFields = [
        "idSolicitante",
        "nomeSolicitante",
        "valor",
        "centroCusto",
        "dataDespesa",
        "justificativa",
        "anexoDespesas",

        "idFinanceiro",
        "nomeFinanceiro",
        "dataFinanceiro",
        "radioTypesFinanceiro",
        "justificativaFinanceiro"
    ];
    
    for (var i = 0; i < allFields.length; i++) {
        form.setEnabled(allFields[i], false);
    }
 }