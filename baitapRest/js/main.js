/**
 * Tính điểm trung bình của 2 khối lớp
 * 
 * + chỉ được viết 1 hàm tính điểm cho cả 2 khối lớp
 * + chuẩn clean code
 */
 let tinhTB = (...diem) => {
    console.log(diem); //mảng điểm
    let tong = 0;
    diem.map((item) => {
        tong += item;
    })

    return tong / diem.length;
}

let layDiemKhoi1 = () => {
    let toan = document.querySelector("#inpToan").value;
    let ly = document.querySelector("#inpLy").value;
    let hoa = document.querySelector("#inpHoa").value;
    console.log(toan,ly,hoa);

    // let dtb = tinhTB(Number(toan),Number(ly),Number(hoa))
    // console.log(dtb);
    document.querySelector("#tbKhoi1").innerHTML = tinhTB(Number(toan),Number(ly),Number(hoa))

}
document.querySelector("#btnKhoi1").onclick = layDiemKhoi1;

let layDiemKhoi2 = () => {
    let van = document.querySelector("#inpVan").value;
    let su = document.querySelector("#inpSu").value;
    let dia = document.querySelector("#inpDia").value;
    let english = document.querySelector("#inpEnglish").value;
    console.log(van,su,dia,english)

    document.querySelector("#tbKhoi2").innerHTML = tinhTB(Number(van),Number(su),Number(dia),Number(english));
}
document.querySelector("#btnKhoi2").onclick = layDiemKhoi2;



//met
let tinhTB1 = (t,l,h) => {
    return(t+l+h) / 3;
}
let tinhTB2 = (v,s,d,av) => {
    return(v+s+d+av) / 4;
}




console.log(tinhTB(tinhTB1(Number(toan),Number(ly),Number(hoa))));