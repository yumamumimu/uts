"use client";

import React, { useState, useEffect } from 'react';
import "../yuma-style.css"; // Pastikan file CSS sesuai dengan style yang kamu inginkan

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);

  useEffect(() => {
    // Set gambar yang ingin ditampilkan (3 gambar)
    setImages([
      '/c.png',  // Path relatif gambar
      '/g.png',
      '/b.png',
    ]);

    // Deskripsi untuk setiap gambar
    setDescriptions([
      'Tidur adalah hobi saya',
      'Ngoding yang awalnya menjadi musuh sekarang menjadi teman dekat',
      'Bermain musik walaupun tidak pernah didengar',
    ]);
  }, []); // Pastikan array kosong di sini untuk hanya memanggil sekali

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Hobbies Gallery</h2>
      <div style={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} style={styles.imageWrapper}>
            <img src={image} alt={`Hobi ${index + 1}`} style={styles.image} />
            <p style={styles.description}>{descriptions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'rgba(30, 30, 30, 0.8)',  // Dark background with transparency
    color: '#E0E0E0',
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)', // Efek blur latar belakang
  },
  header: {
    textAlign: 'center' as 'center',
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#BB86FC', // Violet color to match theme
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Menampilkan 3 kolom
    gap: '20px',
    padding: '10px',
  },
  imageWrapper: {
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 0px 10px #000',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    position: 'relative' as 'relative', // Mengubah 'relative' menjadi tipe yang valid
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as 'cover',
  },
  description: {
    textAlign: 'center' as 'center',
    color: '#E0E0E0',
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#333', // Dark background for description
    borderRadius: '0 0 8px 8px',
    marginTop: '10px',
    position: 'absolute' as 'absolute',  // Position absolute for the description to sit below the image
    bottom: '0', // Align the description at the bottom of the wrapper
    width: '100%',  // Full width to make sure the description covers the image width
    zIndex: 1, // Ensure the description appears on top of image if necessary
  },
};

export default Gallery;
