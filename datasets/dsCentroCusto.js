function createDataset(fields, constraints, sortFields) {
    var ds = DatasetBuilder.newDataset();
    ds.addColumn("Id");
    ds.addColumn("Descricao");
    
    var data = [
        ["1001", "Administrativo"],
        ["1002", "Financeiro"],
        ["1003", "Manutenção"],
        ["1004", "Produção"],
        ["1005", "TI"],
        ["1006", "Logística"],
    ];

    for(var index=0; index<data.length; index++){
        ds.addRow(data[index]);
    }

    return ds;
}