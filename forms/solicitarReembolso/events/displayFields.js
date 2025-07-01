function displayFields(form,customHTML){
	var user = form.getValue("WKUser");
    var constraints = [ DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", user, user,  ConstraintType.MUST) ];
    var groupDataset = DatasetFactory.getDataset("colleagueGroup", null, constraints, null);
    
    // Grupos envolvidos no processo:
    var groups = [
        "grpColaborador", // MariaTeste
        "grpFinanceiro"   //JanainaTeste e CassandraTeste
    ];

    // Percorrer os grupos do usuário:
    var userGroup = {};
    for (var i = 0; i < groupDataset.rowsCount; i++) {
        var groupId = groupDataset.getValue(i, "colleagueGroupPK.groupId");
        for (var index = 0; index < groups.length; index++) {
            if (groupId == groups[index]) {
                userGroup[groups[index]] = groupId;
            }
        }
    }

    // Obter a data atual:
    function getDate(){
        var now = new Date();
        var day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
        var month = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
        var year = now.getFullYear();
        var formatDate = day + '/' + month + '/' + year;
        return formatDate;
    }

    // Habilitando os campos necessários para a etapa do solicitante:
    if("grpColaborador" in userGroup){
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

    // Habilitando os campos necessários para a etapa do financeiro:
    if("grpFinanceiro" in userGroup){
        user = getValue("WKUser");

        form.setEnabled("idFinanceiro", true);
        form.setEnabled("nomeFinanceiro", true);

        form.setEnabled("dataFinanceiro", true);
        form.setEnabled("radioTypesFinanceiro", true);
        form.setEnabled("justificativaFinanceiro", true);
    }
}