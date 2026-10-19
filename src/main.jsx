import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const regions=['Batang','Kota Pekalongan','Kabupaten Pekalongan','Pemalang','Kota Tegal','Kabupaten Tegal','Brebes'];
const programs=[
  ['Advokasi & Perlindungan','Mengawal hak, perlindungan profesi, dan aspirasi guru serta tenaga kependidikan.'],
  ['Profesionalisme & Kompetensi','Mendorong pengembangan kompetensi, literasi digital, dan pembelajaran relevan.'],
  ['Karier & Kesejahteraan','Memperjuangkan karier yang adil bagi guru dan tenaga kependidikan.'],
  ['Solidaritas & Pengabdian','Menguatkan jaringan antarwilayah dan pengabdian untuk pendidikan Pantura Barat.']
];
const articles=[
  {
    title:'Tunjangan Guru Non-ASN Ditargetkan Mulai Cair Pekan Depan',
    date:'18 Oktober 2026',
    desc:'Kemendikdasmen menyampaikan penyaluran tunjangan yang tertunda ditargetkan dilakukan bertahap pada 19–25 Oktober 2026.',
    href:'/berita/tunjangan-guru-non-asn-cair-pekan-depan/'
  },
  {
    title:'PGRI Karesidenan Pekalongan Audiensi dengan PGRI Jawa Tengah',
    date:'12 Oktober 2026',
    desc:'Aspirasi guru PPPK dan tenaga kependidikan PPPK paruh waktu dibawa dalam forum audiensi lintas wilayah.',
    href:'#'
  },
  {
    title:'Karier yang Berkeadilan bagi Guru dan Tenaga Kependidikan',
    date:'Oktober 2026',
    desc:'Fokus aspirasi bersama pada kepastian status, pengembangan karier, dan penghargaan terhadap pengabdian.',
    href:'#'
  }
];

function App(){
  return <main>
    <div className="topbar">Portal informasi PGRI wilayah Pantura Barat</div>
    <header className="nav">
      <div className="brand">
        <div className="badge">PBB</div>
        <div><strong>PGRI JATENG BAGIAN BARAT</strong><span>SUARA PBB</span></div>
      </div>
      <nav><a href="#tentang">Tentang</a><a href="#wilayah">Wilayah</a><a href="#program">Program</a><a href="#berita">Berita</a></nav>
    </header>

    <section className="hero">
      <div className="heroCopy">
        <p className="eyebrow">SATU SEMANGAT · TUJUH DAERAH</p>
        <h1>SUARA PBB:<br/><em>Suara PGRI Jateng</em><br/>Bagian Barat.</h1>
        <p className="lead">Wadah kolaborasi dan perjuangan PGRI se-Karesidenan Pekalongan untuk memperkuat martabat profesi, kesejahteraan, dan masa depan pendidikan.</p>
        <a className="button" href="#berita">Kabar Terkini</a>
      </div>
      <div className="heroCard">
        <small>PBB 17 · PGRI BAGIAN BARAT JTG</small>
        <h2>Kita kuat<br/>karena <i>bersama.</i></h2>
        <p>Solidaritas • Profesionalitas • Pengabdian</p>
        <div className="seven">07 <span>DAERAH<br/>BERSINERGI</span></div>
      </div>
    </section>

    <section id="tentang" className="section">
      <p className="kicker">TENTANG KAMI</p>
      <h2>Satu ruang suara untuk tujuh wilayah.</h2>
      <p className="sectionLead">Portal ini menjadi ruang informasi, gagasan, dan solidaritas organisasi PGRI Jateng Bagian Barat.</p>
    </section>

    <section id="wilayah" className="section">
      <p className="kicker">WILAYAH</p>
      <div className="regions">{regions.map((r,i)=><div className="region" key={r}><b>{String(i+1).padStart(2,'0')}</b><span>{r}</span></div>)}</div>
    </section>

    <section id="program" className="section alt">
      <p className="kicker">PROGRAM</p>
      <h2>Gerak bersama untuk guru dan pendidikan.</h2>
      <div className="programs">{programs.map(([t,d],i)=><article key={t}><small>0{i+1}</small><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section id="berita" className="section">
      <p className="kicker">BERITA & WAWASAN</p>
      <h2>Kabar terkini SUARA PBB.</h2>
      <div className="news">{articles.map(a=><article key={a.title}><div className="date">{a.date}</div><h3>{a.title}</h3><p>{a.desc}</p><a href={a.href}>Baca selengkapnya →</a></article>)}</div>
    </section>

    <footer><strong>SUARA PBB</strong><span>PGRI Jateng Bagian Barat · 2026</span></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App/>);