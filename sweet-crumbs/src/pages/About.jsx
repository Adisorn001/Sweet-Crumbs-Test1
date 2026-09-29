import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="page about fade-in">
      <section className="about__hero">
        <div className="container">
          <h1>About Us</h1>
          <p>The story behind every crumb</p>
        </div>
      </section>

      <section className="about__story">
        <div className="container about__story-grid">
          <div className="about__story-image-container">
            <img src="https://placehold.co/500x400/D4A574/3E2723?text=Our+Kitchen" alt="Our Kitchen" className="about__story-image" />
          </div>
          <div className="about__story-text">
            <h2>ที่มาของเรา</h2>
            <p>Sweet Crumbs เริ่มต้นจากครัวเล็กๆ ที่บ้านในอ่างทอง ที่กลิ่นเนยอุ่นๆ ลอยมาก่อนตะวันขึ้น ทุกเช้าวันเสาร์เราอบครัวซองต์ถาดเดียว แล้วถือไปให้เพื่อนบ้าน แค่อยากเห็นรอยยิ้มตอนจิบกาแฟแก้วแรก</p>
            <p>เรื่องราวแพร่ไปเร็วกว่าตัวครัวซองต์ เพื่อนบ้านขอสั่งล่วงหน้า แล้วก็เพื่อนของเพื่อน แล้วก็คนที่เราไม่เคยรู้จัก สิ่งที่เคยเป็นแค่นิสัยวันหยุดกลายเป็นคำมั่นว่า ขนมทุกชิ้นอบสดในเช้าวันนั้น ทีละน้อย ใช้เนยแท้ ไม่ลดขั้นตอน</p>
            <p>เราขอขายหมดตอนเที่ยงดีกว่าเสิร์ฟสิ่งที่ตัวเองไม่อยากกิน ไม่ว่าคุณจะแวะมาซื้อขนมชิ้นเล็กๆ หรือสั่งสำหรับวันสำคัญ เราหวังว่าขนมจาก Sweet Crumbs จะทำให้วันของคุณหวานขึ้นอีกนิด</p>
          </div>
        </div>
      </section>

      <section className="about__values">
        <div className="container">
          <div className="about__values-grid">
            <div className="about__value-card">
              <div className="about__value-icon">🌾</div>
              <h3>วัตถุดิบคุณภาพสูง</h3>
              <p>เราเลือกใช้ส่วนประกอบคุณภาพสูงและสดใหม่จากซัพพลายเออร์ท้องถิ่นเท่านั้น</p>
            </div>
            <div className="about__value-card">
              <div className="about__value-icon">👐</div>
              <h3>ทำด้วยมือ</h3>
              <p>ขนมอบทุกชิ้นผ่านการรังสรรค์ด้วยมืออย่างใส่ใจ ไม่มีการผลิตแบบอุตสาหกรรมจำนวนมาก</p>
            </div>
            <div className="about__value-card">
              <div className="about__value-icon">🤝</div>
              <h3>ชุมชน</h3>
              <p>เราเชื่อในการเชื่อมโยงผู้คนเข้าด้วยกันผ่านอาหารรสเลิศ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about__stats">
        <div className="container about__stats-grid">
          <div className="about__stat-item">
            <div className="about__stat-number">5+</div>
            <div className="about__stat-label">ปี</div>
          </div>
          <div className="about__stat-item">
            <div className="about__stat-number">10,000+</div>
            <div className="about__stat-label">ลูกค้าพึงพอใจ</div>
          </div>
          <div className="about__stat-item">
            <div className="about__stat-number">50+</div>
            <div className="about__stat-label">สูตรอาหารเฉพาะ</div>
          </div>
        </div>
      </section>
    </div>
  );
}