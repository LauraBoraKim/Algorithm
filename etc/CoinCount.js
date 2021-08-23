// 거스름돈
// 당신은 음식점의 계산을 도와주는 사람이다. 카운터에는 거스름돈으로 사용할 500,100,50,10원짜리 동전이 무한히 존재한다고 가정한다.
// 손님에게 거슬러 주야 할 돈이 N원일 때 거슬러줘야 할 동전의 최소 개수를 구하라. 단, 거슬러 줘야 할 돈 N은 항상10의 배수이다.

n = 1260 // 거슬러 줘야 되는 돈

function coinCount(n){
    const coin_types = [500, 100, 50, 10] // 큰 단위의 동전부터 차례대로 확인
    let count = 0 // 필요한 최소 동전의 개수 
    
    for(coin of coin_types){
        count += parseInt(n / coin) // 몫은 count에 누적,
        n %= coin // 나머지는 n에 저장
        console.log(n, ' ', count)
    }

    return count
}

console.log(coinCount(n))
