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
        "idSolicitante", "nomeSolicitante", "valor",
        "centroCusto", "dataDespesa", "justificativa",
        "anexoDespesas", "idFinanceiro", "nomeFinanceiro",
        "dataFinanceiro", "radioTypesFinanceiro",
        "justificativaFinanceiro", "anexoComprovantePG"
    ];
    
    log.info("CHECKDATA - INICIO DO BLOQUEIO DE CAMPOS");
    for (var i = 0; i < allFields.length; i++) {
        form.setEnabled(allFields[i], false);
    }
    log.info("CHECKDATA - FIM DO BLOQUEIO DE CAMPOS");
    
    // Etapa: Colaborador
    if ("grpColaboradores" in userGroup) {        
        // Nome e ID é obtido do sistema:
        log.info("CHECKDATA - NOME OBTIDO: " + username);
        form.setValue("nomeSolicitante", username);
        form.setEnabled("nomeSolicitante", false);
        
        log.info("CHECKDATA - NOME OBTIDO: " + userLogin);
        form.setValue("idSolicitante", userLogin);
        form.setEnabled("idSolicitante", false);

        form.setEnabled("valor", true);
        form.setEnabled("centroCusto", true);
        form.setEnabled("dataDespesa", true);
        form.setEnabled("justificativa", true);
        form.setEnabled("anexoDespesas", true);
        log.info("CHECKDATA - fim do processo");
    }

    // Etapa: Financeiro
    if ("grpFinanceiro" in userGroup) {
        form.setEnabled("idFinanceiro", true);
        form.setEnabled("nomeFinanceiro", true);
        form.setEnabled("dataFinanceiro", true);
        form.setEnabled("radioTypesFinanceiro", true);
        form.setEnabled("justificativaFinanceiro", true);
        form.setEnabled("anexoComprovantePG", true);
    }
}


// Obter o nome do usuário através do username:
function getUserName(login){
    log.info("CHECKDATA - INICIO DA REQUISIÇÃO DO NOME");
    var colleague = DatasetFactory.createConstraint("colleaguePK.colleagueId", login, login, ConstraintType.MUST);
    var ds = DatasetFactory.getDataset("colleague", null, [colleague], null);
    if(ds.rowsCount > 0){
        log.info("CHECKDATA - FINAL DA REQUISIÇÃO DO NOME ENCONTRADO");
        return ds.getValue(0, "colleagueName");
    }
    log.info("CHECKDATA - FINAL DA REQUISIÇÃO DO NOME - NULL");
    return null;
}