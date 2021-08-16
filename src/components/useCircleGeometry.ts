function useCircleGeometry(size:number, strokewidth:number) {
    const radius = (size - strokewidth) / 2
    return {
        radius,
        circumference: parseInt((radius * 2 * Math.PI).toFixed()),
        midpoint: size / 2
    }
}
export default useCircleGeometry