function displayFields(form, customHTML) {
    var user = getValue("WKUser");
    var constraints = [ DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", user, user, ConstraintType.MUST) ];
    var groupDataset = DatasetFactory.getDataset("colleagueGroup", null, constraints, null);
    
    var groups = ["grpColaboradores", "grpCentroCusto", "grpFinanceiro"];
    var userGroup = {};

    log.info("CHECKDATA 1");
    for (var i = 0; i < groupDataset.rowsCount; i++) {
        log.info("CHECKDATA 1.1");
        var groupId = groupDataset.getValue(i, "colleagueGroupPK.groupId");
        for (var index = 0; index < groups.length; index++) {
            log.info("CHECKDATA 1.2");
            if (groupId == groups[index]) {
                log.info("CHECKDATA 1.2.1");
                userGroup[groups[index]] = groupId;
            }
        }
    }

    log.info("CHECKDATA 2");
    function getDate() {
        var now = new Date();
        var day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
        var month = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
        return day + '/' + month + '/' + now.getFullYear();
    }

    // Etapa: Colaborador
    if ("grpColaboradores" in userGroup) {
        log.info("CHECKDATA 3 - Colaborador");
        
        // form.setValue("idSolicitante", user);        
        // form.setEnabled("idSolicitante", true);
        
        
        // form.setValue("nomeSolicitante", user);
        // form.setEnabled("nomeSolicitante", true);

        form.setEnabled("valor", true);
        form.setEnabled("centroCusto", true);
        form.setEnabled("dataDespesa", true);
        form.setEnabled("justificativa", true);
        form.setEnabled("anexoDespesas", true);
        log.info("CHECKDATA 3 - Colaborador - FIM");
    }

    // Etapa: Financeiro
    if ("grpFinanceiro" in userGroup) {
        log.info("CHECKDATA 3 - Financeiro");
        form.setEnabled("idFinanceiro", true);
        form.setEnabled("nomeFinanceiro", true);
        form.setEnabled("dataFinanceiro", true);
        form.setEnabled("radioTypesFinanceiro", true);
        form.setEnabled("justificativaFinanceiro", true);
        form.setEnabled("anexoComprovantePG", true);
    }
}
