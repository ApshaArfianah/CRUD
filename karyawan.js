const karyawan1 = {}

const karyawan2 = {} 

const karyawan3 = {}

const karyawan4 = {}

const karyawan5 = {}

const karyawan7 = {}

const karyawan8 = {}

const karyawan9 = {}

const karyawan10 = {}


const daftarKaryawan = [
    {
    nama: "Devyn Ramirez",
    masakerja: "10",
    noinduk: "1",
    gaji: "7.000.000",
    },
    {
    nama: "Harmony Duncan",
    masakerja: "5",
    noinduk: "2",
    gaji: "4.000.000",
    },
    {
     nama: "Clarissa Burgess",
    masakerja: "8",
    noinduk: "3",
    gaji: "7.000.000",
    },
    {
    nama: "Reilly Blanchard",
    masakerja: "7",
    noinduk: "4",
    gaji: "7.000.000",
    },
    {
    nama: "Zion Brooks",
    masakerja: "4 ",
    noinduk: "5",
    gaji: "4.000.000",
    },
    {
    nama: "Jovanny Mays",
    masakerja: "10",
    noinduk: "6",
    gaji: "7.000.000",
    },
    {
    nama: "Cindy Chase",
    masakerja: "9",
    noinduk: "7",
    gaji: "7.000.000",
    },
    {
    nama: "Kristin Mcdaniel",
    masakerja: "8",
    noinduk: "8",
    gaji: "7.000.000",
    },
    {
    nama: "Macey Sanford",
    masakerja: "7",
    noinduk: "9",
    gaji: "7.000.000",
    },
    {
    nama: "Alfredo Faulkne",
    masakerja: "10",
    noinduk: "10",
    gaji: "7.000.000",
    },
]

let mode = 'tambah'

const tampilkanKaryawan = () => {

    const tblKaryawan = document.getElementById('tblKaryawan')
    tblKaryawan.innerHTML = `<tr><th>No</th><th>Nama</th><th>Masa Kerja</th><th>Gaji</th><th>No Induk</th><th>Edit</th><th>Hapus</th></tr>`
  
    for (let index in daftarKaryawan) {
        console.log(`${parseInt(index) + 1}. ${daftarKaryawan[index].nama} bekerja selama ${daftarKaryawan[index].masakerja} dengan nomor induk ${daftarKaryawan[index].noinduk} mendapatkan gaji ${daftarKaryawan[index].gaji}`)
    
        tblKaryawan.innerHTML += `<tr><td>${parseInt(index) + 1}.</td><td> ${daftarKaryawan[index].nama}</td><td> ${daftarKaryawan[index].masakerja}</td><td> ${daftarKaryawan[index].gaji}</td><td>${daftarKaryawan[index].noinduk}</td><td><button class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[index].nama}')">Edit</button></td><td><button class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[index].nama}')">Hapus</button></td></tr>`
    }
}

const tambahKaryawan = () => {
    const nama = document.getElementById('txtnama').value
    const masakerja = document.getElementById('txtmasakerja').value
    const gaji = document.getElementById('txtgaji').value
    const noinduk = document.getElementById('txtnoinduk').value

const karyawanBaru = {
    nama: nama,
    masakerja: masakerja,
    gaji: gaji, 
    noinduk: noinduk,
    }


    if (mode == 'tambah') {
        daftarKaryawan.push(karyawanBaru)
    }else{
        daftarKaryawan[mode] = karyawanBaru
    }

    document.getElementById('txtnama').value =""
    document.getElementById('txtmasakerja').value =""
    document.getElementById('txtgaji').value =""
    document.getElementById('txtnoinduk').value =""

    mode ='tambah'

    tampilkanKaryawan()

}

const cariKaryawan = (nama) => {
    for (let i = 0; i < daftarKaryawan.length; i++) {
      if (daftarKaryawan[i].nama == nama) 
        return i
    }
    return -1
}

const hapusKaryawan = (target) => {
    const karyawanDihapus = cariKaryawan(target)
    // menghapus element dari dalam array
    if (karyawanDihapus !== -1) {
        daftarKaryawan.splice(karyawanDihapus, 1)
        tampilkanKaryawan()
    }
    
}

const editKaryawan = (target) => {
    const karyawanEdit = cariKaryawan(target)
    const karyawanDiedit = daftarKaryawan[karyawanEdit];
    
    document.getElementById('txtnama').value = karyawanDiedit.nama
    document.getElementById('txtmasakerja').value = karyawanDiedit.masakerja
    document.getElementById('txtgaji').value = karyawanDiedit.gaji
    document.getElementById('txtnoinduk').value = karyawanDiedit.noinduk

    mode = karyawanEdit
}

const cancel = () => {
    const nama = document.getElementById('txtnama').value =""
    const masakerja = document.getElementById('txtmasakerja').value =""
    const gaji = document.getElementById('txtgaji').value =""
    const noinduk = document.getElementById('txtnoinduk').value =""

    mode = 'tambah'
}


    

//     daftarKaryawan[indexEdit] = {
//     nama: namaBaru,
//     masaKerja: masaKerjaBaru,
//     noInduk: noIndukBaru, 
//     gaji: gajiBaru
//    }
                
// }