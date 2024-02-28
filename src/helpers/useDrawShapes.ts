import { PointEvent } from "../interfaces/types";

export const useDrawShapes = (ctx: any, color: any, startPoint: any, range: string) => {
  let ctxInstance = ctx.current;

  const drawLine = (e: PointEvent) => {
    if (!ctxInstance) return;
    ctxInstance.lineTo(e.x, e.y);
    ctxInstance.lineWidth = range;
    ctxInstance.strokeStyle = color;
    ctxInstance.stroke();
  }

  const drawRectangle = (endPoint: PointEvent) => {
    if (!ctxInstance) return;
    if (!startPoint) return;
    ctxInstance.strokeStyle = color;
    ctxInstance.strokeRect(startPoint.x, startPoint.y, endPoint.x - startPoint.x, endPoint.y - startPoint.y);
  }

  const drawCircle = (endPoint: PointEvent) => {
    if (!ctxInstance) return;
    if (!startPoint) return;
    ctxInstance.beginPath();
    ctxInstance.lineWidth = range;
    ctxInstance.strokeStyle = color;
    const radius = Math.sqrt(Math.pow(startPoint.x - endPoint.x, 2) + Math.pow(startPoint.y - endPoint.y, 2));
    ctxInstance.arc(startPoint.x, startPoint.y, radius, 0, 2 * Math.PI);
    ctxInstance.stroke();
  }

  const drawEraser = (e: PointEvent) => {
    if (!ctxInstance) return;
    ctxInstance.lineTo(e.x, e.y);
    ctxInstance.lineWidth = parseInt(range) + 10;
    ctxInstance.strokeStyle = "#fff";
    ctxInstance.stroke();
  }

  const drawTriangle = (e: PointEvent) => {
    if (!ctxInstance) return;
    if (!startPoint) return;
    ctxInstance.strokeStyle = color;
    ctxInstance.lineWidth = range;
    ctxInstance.beginPath();
    ctxInstance.moveTo(startPoint.x, startPoint.y);
    ctxInstance.lineTo(e.x, e.y);
    ctxInstance.lineTo(startPoint.x * 2 - e.x, e.y);
    ctxInstance.closePath();
    ctxInstance.stroke();
  }

  const drawPentagon = (endPoint: PointEvent) => {
    if (!ctxInstance) return;
    if (!startPoint) return;
    ctxInstance.strokeStyle = color;
    ctxInstance.lineWidth = range;
    const sideLength = Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
    const angle = (Math.PI * 2) / 5;
    ctxInstance.beginPath();
    ctxInstance.moveTo(startPoint.x + sideLength * Math.cos(0), startPoint.y + sideLength * Math.sin(0));
    for (let i = 1; i <= 5; i++) {
      ctxInstance.lineTo(startPoint.x + sideLength * Math.cos(angle * i), startPoint.y + sideLength * Math.sin(angle * i));
    }
    ctxInstance.closePath();
    ctxInstance.stroke();
  }
  
  const drawHexagon = (endPoint: PointEvent) => {
    if (!ctxInstance) return;
    if (!startPoint) return;
    ctxInstance.strokeStyle = color;
    ctxInstance.lineWidth = range;
    const sideLength = Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
    const angle = (Math.PI * 2) / 6;
    ctxInstance.beginPath();
    ctxInstance.moveTo(startPoint.x + sideLength * Math.cos(0), startPoint.y + sideLength * Math.sin(0));
    for (let i = 1; i <= 6; i++) {
      ctxInstance.lineTo(startPoint.x + sideLength * Math.cos(angle * i), startPoint.y + sideLength * Math.sin(angle * i));
    }
    ctxInstance.closePath();
    ctxInstance.stroke();
  }
  
  const drawOctagon = (endPoint: PointEvent) => {
    if (!ctxInstance) return;
    if (!startPoint) return;
    ctxInstance.strokeStyle = color;
    ctxInstance.lineWidth = range;
    const sideLength = Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
    const angle = (Math.PI * 2) / 8;
    ctxInstance.beginPath();
    ctxInstance.moveTo(startPoint.x + sideLength * Math.cos(0), startPoint.y + sideLength * Math.sin(0));
    for (let i = 1; i <= 8; i++) {
      ctxInstance.lineTo(startPoint.x + sideLength * Math.cos(angle * i), startPoint.y + sideLength * Math.sin(angle * i));
    }
    ctxInstance.closePath();
    ctxInstance.stroke();
  }
  
  const drawStar = (endPoint: PointEvent) => {
    if (!ctxInstance) return;
    if (!startPoint) return;
    ctxInstance.strokeStyle = color;
    ctxInstance.lineWidth = range;
    const innerRadius = Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)) * 0.382;
    const outerRadius = Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
    const angle = (Math.PI * 2) / 10;
    ctxInstance.beginPath();
    ctxInstance.moveTo(startPoint.x + outerRadius * Math.cos(0), startPoint.y + outerRadius * Math.sin(0));
    for (let i = 1; i <= 10; i++) {
      const r = i % 2 === 0 ? outerRadius : innerRadius;
      ctxInstance.lineTo(startPoint.x + r * Math.cos(angle * i), startPoint.y + r * Math.sin(angle * i));
    }
    ctxInstance.closePath();
    ctxInstance.stroke();
  }
  
  const drawHeart = (endPoint: PointEvent) => {
    if (!ctxInstance) return;
    if (!startPoint) return;
    ctxInstance.strokeStyle = color;
    ctxInstance.lineWidth = range;
    ctxInstance.beginPath();
    const x = (startPoint.x + endPoint.x) / 2;
    const y = (startPoint.y + endPoint.y) / 2;
    const width = Math.abs(startPoint.x - endPoint.x);
    const height = Math.abs(startPoint.y - endPoint.y);
    const topCurveHeight = height * 0.3;
    ctxInstance.moveTo(x, y + height / 2);
    ctxInstance.bezierCurveTo(x, y + height / 2, x - width / 2, y - topCurveHeight, x, y - height / 2);
    ctxInstance.bezierCurveTo(x, y - height / 2, x + width / 2, y - topCurveHeight, x, y + height / 2);
    ctxInstance.closePath();
    ctxInstance.stroke();
  }
  
  return { drawLine, drawCircle, drawRectangle, drawEraser, drawTriangle, drawPentagon, drawHexagon, drawOctagon, drawStar, drawHeart };
}
