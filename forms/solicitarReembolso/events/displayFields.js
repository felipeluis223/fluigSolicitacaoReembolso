function displayFields(form, customHTML) {
    var user = getValue("WKUser");
    var constraints = [ DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", user, user, ConstraintType.MUST) ];
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

    // Etapa: Colaborador
    if ("grpColaboradores" in userGroup) {        
        // ID e Nome com os dados obtidos do sistema:
        form.setValue("idSolicitante", user);        
        form.setEnabled("idSolicitante", false);
        form.setValue("nomeSolicitante", user);
        form.setEnabled("nomeSolicitante", false);
        
        form.setEnabled("valor", true);
        form.setEnabled("centroCusto", true);
        form.setEnabled("dataDespesa", true);
        form.setEnabled("justificativa", true);
        form.setEnabled("anexoDespesas", true);
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
