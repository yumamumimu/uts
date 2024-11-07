import React from 'react';
import { CSSProperties } from 'react';

const Resume = () => {
    const pekerjaan = [
        {
            posisi: 'Manager & Editor',
            perusahaan: 'Aoshi Market',
            tahun: '2022 - 2023',
            deskripsi: 'Bertanggung jawab atas konten sosial media',
        },
        {
            posisi: 'Worker & Editor',
            perusahaan: 'Takapedia',
            tahun: '2023 - Present',
            deskripsi: 'Mencari dan Membuat konten untuk kebutuhan sosial media',
        },
      
    ];

    const pendidikan = [
        {
            institusi: 'Sekolah Menengah Pertama',
            jurusan: 'SMPN 1 Rancaekek',
            tahun: '2015 - 2018',
            deskripsi: ' Jl. Raya Majalaya - Rancaekek No.87, Rancaekek Wetan, Kec. Rancaekek, Kabupaten Bandung, Jawa Barat 40394',
        },
        {
            institusi: 'Sekolah Menengah Kejuruan',
            jurusan: 'SMK Lugina Rancaekek',
            tahun: '2018 - 2021',
            deskripsi: 'Jl. Raya Majalaya - Rancaekek Desa No.5, Bojongloa, Kec. Rancaekek, Kabupaten Bandung, Jawa Barat 40394',
        },
        {
            institusi: 'Perguruan Tinggi',
            jurusan: 'Ma`soem Univeristy',
            tahun: '2022 - Present',
            deskripsi: 'Jl. Raya Cipacing No.22, Cipacing, Kec. Jatinangor, Kabupaten Sumedang, Jawa Barat 45363',
        },
    ];

    // Tingkat keterampilan digambarkan sebagai nilai antara 1 hingga 5 bintang
    const skills = [
        { skill: 'JavaScript', level: 3 },
        { skill: 'React', level: 4 },
        { skill: 'Editing', level: 5 },
        { skill: 'HTML & CSS', level: 3 },
        { skill: 'Database Management', level: 2 },
    ];

    // Fungsi untuk menghasilkan rating bintang berdasarkan level keterampilan
    const renderStars = (level: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(i <= level ? '★' : '☆'); // ★ untuk bintang penuh, ☆ untuk kosong
        }
        return stars.join(' ');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Riwayat Pekerjaan dan Pendidikan</h1>
            
            <section style={styles.section}>
                <h2 style={styles.subHeader}>Riwayat Pekerjaan</h2>
                {pekerjaan.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <h3 style={styles.cardTitle}>{item.posisi}</h3>
                        <p><strong>Perusahaan:</strong> {item.perusahaan}</p>
                        <p><strong>Tahun:</strong> {item.tahun}</p>
                        <p>{item.deskripsi}</p>
                    </div>
                ))}
            </section>

            <section style={styles.section}>
                <h2 style={styles.subHeader}>Riwayat Pendidikan</h2>
                {pendidikan.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <h3 style={styles.cardTitle}>{item.institusi}</h3>
                        <p><strong>Jurusan:</strong> {item.jurusan}</p>
                        <p><strong>Tahun:</strong> {item.tahun}</p>
                        <p>{item.deskripsi}</p>
                    </div>
                ))}
            </section>

            <section style={styles.section}>
                <h2 style={styles.subHeader}>Skill</h2>
                <div style={styles.skillContainer}>
                    {skills.map((item, index) => (
                        <div key={index} style={styles.skill}>
                            <span style={styles.skillName}>{item.skill}</span>
                            <span style={styles.stars}>{renderStars(item.level)}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

const styles: { [key: string]: CSSProperties } = {
    container: {
        maxWidth: '1200px',  // Lebar kontainer lebih besar seperti layout gallery
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'rgba(30, 30, 30, 0.8)', // Background dengan transparansi
        color: '#E0E0E0',
        borderRadius: '8px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)', // Efek blur
    },
    header: {
        textAlign: 'center',
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#BB86FC', // Warna ungu untuk header
    },
    section: {
        marginBottom: '30px',
    },
    subHeader: {
        fontSize: '1.5rem',
        color: '#BB86FC',
        marginBottom: '15px',
    },
    card: {
        backgroundColor: '#2E2E2E', // Warna latar belakang card
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '15px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    },
    cardTitle: {
        fontSize: '1.25rem',
        color: '#BB86FC',  // Warna ungu untuk judul pekerjaan dan pendidikan
    },
    skillContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    skill: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: '#333',
        borderRadius: '5px',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
    },
    skillName: {
        fontWeight: 'bold',
    },
    stars: {
        fontSize: '1.2rem',
        color: '#FFD700', // Warna emas untuk bintang
    },
};

export default Resume;
