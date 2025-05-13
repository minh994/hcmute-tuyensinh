import React from 'react';
import Link from 'next/link';

const ProgramCards = () => {
  const programs = [
    {
      title: 'ĐÀO TẠO ĐẠI HỌC\nHỆ CHÍNH QUY',
      color: 'program-card-blue',
      href: '/he-chinh-quy'
    },
    {
      title: 'ĐÀO TẠO LIÊN KẾT\nQUỐC TẾ & DU HỌC',
      color: 'program-card-purple',
      href: '/lien-ket-quoc-te'
    },
    {
      title: 'ĐÀO TẠO ĐẠI HỌC\nHỆ VỪA LÀM VỪA HỌC',
      color: 'program-card-red',
      href: '/vua-lam-vua-hoc'
    }
  ];

  const secondRowPrograms = [
    {
      title: 'ĐÀO TẠO\nSAU ĐẠI HỌC',
      color: 'program-card-orange',
      href: '/sau-dai-hoc'
    },
    {
      title: 'ĐÀO TẠO TỪ XA',
      color: 'program-card-green',
      href: '/dao-tao-tu-xa'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {programs.map((program, index) => (
          <Link href={program.href} key={index}>
            <div className={`program-card ${program.color}`}>
              {program.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < program.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {secondRowPrograms.map((program, index) => (
          <Link href={program.href} key={index}>
            <div className={`program-card ${program.color}`}>
              {program.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < program.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProgramCards;
