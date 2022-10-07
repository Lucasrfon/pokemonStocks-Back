import { Request, Response } from "express";
import { TMarket } from "../repositories/marketRepository";

export async function requestMarket(req: Request, res: Response) {
  const marketData = await getMarketData();

  res.status(200).send(marketData);
}

export async function requestBuyStocks(req: Request, res: Response) {
  const buyOrder: TMarket = req.body;

  await buyStocks(buyOrder);

  res.status(200).send("Ordem de compra realizada");
}

export async function requestSellStocks(req: Request, res: Response) {
  const sellOrder: TMarket = req.body;

  await sellStocks(sellOrder);

  res.status(200).send("Ordem de venda realizada");
}
