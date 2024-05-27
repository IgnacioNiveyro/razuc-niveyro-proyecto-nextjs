// Skeleton.tsx
import React from 'react';

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
      <style jsx>{`
        .skeleton {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #f0f0f0;
        }
        .skeleton-image {
          width: 160px;
          height: 220px;
          background: #ccc;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .skeleton-text {
          width: 80%;
          height: 16px;
          background: #ddd;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .skeleton-text.short {
          width: 60%;
        }
      `}</style>
    </div>
  );
};

export default Skeleton;
