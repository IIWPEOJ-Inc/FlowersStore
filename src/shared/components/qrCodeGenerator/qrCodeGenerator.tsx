import './qrCodeGenerator.scss';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  return (
    <div className="qr-code-container">
      <QRCode value={process.env.REACT_APP_BASE_URL!} size={200} />
      <p>Сканируйте QR-код, чтобы перейти на страницу.</p>
    </div>
  );
};

export default QRCodeGenerator;
