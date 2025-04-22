import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { dadosEquipe, dadosPagamento } = await req.json(); //lê o json do front

    //Envia esse mesmo JSON para sua API externa
    const response = await fetch("https://api.rinhacampusiv.com/inscricoes" , {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dadosEquipe, dadosPagamento }),
    });

    const data = await response.json();

    if (data.qrCodeBase64 && data.qrCode) {
        return NextResponse.json({
            qrCodeBase64: data.qrCodeBase64,
            qrCode: data.qrCode,
            uuid: data.uuid,
            valor: data.valor,
          });
    }else{
        
        return NextResponse.json({ error: "Erro ao gerar QR Code" }, { status: 500 });
    }

    
    

  } catch (error) {
    
    return NextResponse.json(
      { error: "Erro interno", detalhes: error.message },
      { status: 500 }
    );
  }
}
