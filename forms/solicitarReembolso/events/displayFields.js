function displayFields(form, customHTML) {
    var userLogin = getValue("WKUser");
    var username = getUserName(userLogin);
    var constraints = [ DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", userLogin, userLogin, ConstraintType.MUST) ];
    var groupDataset = DatasetFactory.getDataset("colleagueGroup", null, constraints, null);
    
    var groups = ["grpColaboradores", "grpCentroCusto", "grpFinanceiro"];
    var userGroup = {};

    // Percorrer os grupos que o usuário participa:
    for (var i = 0; i < groupDataset.rowsCount; i++) {
        var groupId = groupDataset.getValue(i, "colleagueGroupPK.groupId");
        for (var index = 0; index < groups.length; index++) {
            if (groupId == groups[index]) {
                userGroup[groups[index]] = groupId;
            }
        }
    }

    // Desabilita todos os campos por padrão:
    var allFields = [
        "idSolicitante",
        "nomeSolicitante",
        "valor",
        "centroCusto",
        "dataDespesa",
        "justificativa",
        "anexoDespesas",
        "idCentroCusto",
        "nomeCentroCusto",
        "dataCentroCusto",
        "radioTypesCentroCusto",
        "justificativaCentroCusto",
        "idFinanceiro",
        "nomeFinanceiro",
        "dataFinanceiro",
        "radioTypesFinanceiro",
        "justificativaFinanceiro",
        "anexoComprovantePG"
    ];

    
    for (var i = 0; i < allFields.length; i++) {
        form.setEnabled(allFields[i], false);
    }
    
    // Etapa: Colaborador
    if ("grpColaboradores" in userGroup) {        
        // Nome e ID é obtido do sistema:
        form.setValue("nomeSolicitante", username);
        form.setEnabled("nomeSolicitante", false);
        
        form.setValue("idSolicitante", userLogin);
        form.setEnabled("idSolicitante", false);

        form.setEnabled("valor", true);
        form.setEnabled("centroCusto", true);
        form.setEnabled("dataDespesa", true);
        form.setEnabled("justificativa", true);
        form.setEnabled("anexoDespesas", true);
        
        // Desabilitando os campos novamente
        if((form.getValue("radioTypesFinanceiro") == "success") || (form.getValue("radioTypesFinanceiro") == "danger")){
            form.setEnabled("anexoDespesas", false);

            form.setEnabled("valor", false);
            form.setEnabled("centroCusto", false);
            form.setEnabled("dataDespesa", false);
            form.setEnabled("justificativa", false);
            form.setEnabled("anexoDespesas", false);
        }

    }

    if("grpCentroCusto" in userGroup){
        form.setValue("nomeCentroCusto", username);
        form.setEnabled("nomeCentroCusto", false);

        form.setValue("idCentroCusto", username);
        form.setEnabled("idCentroCusto", false);

        form.setEnabled("dataCentroCusto", true);
        form.setEnabled("radioTypesCentroCusto", true);
        form.setEnabled("justificativaCentroCusto", true);
    }

    // Etapa: Financeiro
    if ("grpFinanceiro" in userGroup) {

        // Nome e ID é obtido do sistema:
        form.setValue("nomeFinanceiro", username);
        form.setEnabled("nomeFinanceiro", false);
        
        form.setValue("idFinanceiro", userLogin);
        form.setEnabled("idFinanceiro", false);

        form.setEnabled("dataFinanceiro", true);
        form.setEnabled("radioTypesFinanceiro", true);
        form.setEnabled("justificativaFinanceiro", true);
        form.setEnabled("anexoComprovantePG", true);
    }
}


// Obter o nome do usuário através do username:
function getUserName(login){
    var colleague = DatasetFactory.createConstraint("colleaguePK.colleagueId", login, login, ConstraintType.MUST);
    var ds = DatasetFactory.getDataset("colleague", null, [colleague], null);
    if(ds.rowsCount > 0){
        return ds.getValue(0, "colleagueName");
    }
    return null;
}