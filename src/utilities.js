export const drawRect = (detections, ctx) => {
    detections.forEach(predict => {
        // get prediction results
        const [x, y, width, height] = predict['bbox'];
        const text = predict['class'];


        // set styling
        const color = 'green';
        ctx.strokeStyle = color;
        ctx.font = '18px Arial';
        ctx.fillStyle = color;

        // draw ractangle and text
        ctx.beingPath();
        ctx.fillText(text, x, y);
        ctx.rext(x, y, width, height);
        ctx.stroke();
    });
}