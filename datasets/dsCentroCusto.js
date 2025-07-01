function createDataset(fields, constraints, sortFields) {
    var ds = DatasetBuilder.newDataset();
    ds.addColumn("Id");
    ds.addColumn("Descricao");
    
    var data = [
        ["1001", "Administrativo"],
        ["1001", "Financeiro"],
        ["1001", "Manutenção"],
        ["1001", "Produção"],
        ["1001", "TI"],
        ["1001", "Logística"],
    ];

    for(var index=0; index<data.length; index++){
        ds.addRow(data[index]);
    }

    return ds;
}