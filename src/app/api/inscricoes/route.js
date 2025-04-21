import { NextResponse } from "next/server";

export async function POST(req) {
    try{
        const formData = await req.body();
        const dadosEquipe = formData.get("dadosEquipe");
        const dadosPagamento = formData.get("dadosPagamento");
        
        const inscricoesForm = new FormData();
        inscricoesForm.append("dadosEquipe", dadosEquipe);
        inscricoesForm.append("dadosPagamento", dadosPagamento);

        const response = await fetch("https://api.rinhacampusiv.com/inscricoes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            dadosEquipe,
            dadosPagamento,
            }),
        });
        const data = await response.json();
        if (!data.success) {
            return NextResponse.json({ error: "Falha na API", detalhes: data }, { status: 500 });
        }
        // Retorna todos os dados necessários para o front-end
        return NextResponse.json({
        qrCodeBase64: data.qrCodeBase64,
        qrCode: data.qrCode,
        uuid: data.uuid,
        valor: data.valor,
      });
    } catch (error){
        console.error("Erro ao processar a requisição:", error);
        return NextResponse.json({ error: "Erro interno" }, { status: 500 }

            );

        }

    }