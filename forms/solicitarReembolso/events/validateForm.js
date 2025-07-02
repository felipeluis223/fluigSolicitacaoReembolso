function validateForm(form){
	var activity = parseInt(getValue("WKNumState"));
    
    // Solicitação:
    if(activity == "1"){
        if(form.getValue("idSolicitante") == ""){
            throw('Informação inválida: é necessário preencher o "ID" do solicitante.');
        }
        if(form.getValue("nomeSolicitante") == ""){
            throw('Informação inválida: é necessário preencher o "Nome" do solicitante.');
        }
        if(form.getValue("valor") == ""){
            throw('Informação inválida: é necessário preencher o "Valor" da solicitação.');
        }
        if(form.getValue("centroCusto") == ""){
            throw('Informação inválida: é necessário preencher o "Centro de Custo" da solicitação.');
        }
        if(form.getValue("dataDespesa") == ""){
            throw('Informação inválida: é necessário preencher a "Data da solicitação" da solicitação.');
        }
        if(form.getValue("anexoDespesas") == ""){
            throw('Informação inválida: é necessário preencher o "Anexo" da solicitação.');
        }
    }
    
    // Centro de Custo - Aprovação:
    if(activity == "2"){
        if(form.getValue("idCentroCusto") == ""){
            throw('Informação inválida: é necessário preencher o "ID" do responsável.');
        }
        if(form.getValue("nomeCentroCusto") == ""){
            throw('Informação inválida: é necessário preencher o "Nome" do responsável.');
        }
        if(form.getValue("dataCentroCusto") == ""){
            throw('Informação inválida: é necessário preencher a "Data da validação" do responsável.');
        }
        if(form.getValue("radioTypesCentroCusto") == ""){
            throw('Informação inválida: é necessário preencher o "Pedido de reembolso" do responsável.');
        }
        // if(form.getValue("justificativaCentroCusto") == ""){}
    }

    // Financeiro - Efetuar Pagamento:
    if(activity == "3"){
        if(form.getValue("idFinanceiro") == ""){
            throw('Informação inválida: é necessário preencher o "ID" do responsável.');
        }
        if(form.getValue("nomeFinanceiro") == ""){
            throw('Informação inválida: é necessário preencher o "Nome" do responsável.');
        }
        if(form.getValue("dataFinanceiro") == ""){
            throw('Informação inválida: é necessário preencher a "Data da validação" do responsável.');
        }
        if(form.getValue("radioTypesFinanceiro") == ""){
            throw('Informação inválida: é necessário preencher o "Pedido de reembolso" do responsável.');
        }
        if(form.getValue("anexoComprovantePG") == ""){
            throw('Informação inválida: é necessário preencher o "Anexo do comprovante".');
        }
        // if(form.getValue("justificativaFinanceiro") == ""){}

    }
}