import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../assets/ui/styles';
import Logo from '../assets/images/yag_logo.png';
import Profile from '../assets/images/profile_image.png';

const Section = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${colors.white};
  border-right: 1px solid ${colors.gray300};
  min-width: 180px;
  max-width: 280px;
  padding: 20px;
`;

const Content = styled.div`
  text-align: left;
  padding: 0px 20px;
  letter-spacing: -0.2px;
`;

const LogoImage = styled.img`
  height: 36px;
  margin-bottom: 20px;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 5rem;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const Age = styled.p`
  margin: 5px 0 20px 0;
  font-size: 16px;
  color: ${colors.gray700};
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin: 20px 0 10px 0;
  color: ${colors.darkblue};
  border-bottom: 1px solid ${colors.gray300};
  padding-bottom: 5px;
`;

const PatientInfoItem = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: ${colors.gray700};
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: ${colors.red100};
  color: ${colors.red};
  padding: 5px 10px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${colors.highlightRed};
`;

// Utility function to calculate age
const calculateAge = (birthdate) => {
  const year = parseInt(birthdate.substring(0, 2), 10);
  const month = parseInt(birthdate.substring(2, 4), 10) - 1;
  const day = parseInt(birthdate.substring(4, 6), 10);
  const currentYear = new Date().getFullYear();
  const birthYear = year < 50 ? 2000 + year : 1900 + year;
  const age = currentYear - birthYear;
  return age;
};

const LeftProfileBar = () => {
  const [patientInfo, setPatientInfo] = useState(null);

  useEffect(() => {
    fetch('/api/patientInfo.json')
      .then(response => response.json())
      .then(data => setPatientInfo(data))
      .catch(error => console.error('Error fetching patient info:', error));
  }, []);

  if (!patientInfo) {
    return <div>Loading...</div>;
  }

  const age = calculateAge(patientInfo.birthdate);

  return (
    <Section>
      <Content>
        <LogoImage src={Logo} />
        <ProfileImageContainer>
          <ProfileImage src={Profile} />
        </ProfileImageContainer>
        <Name>{patientInfo.name}</Name>
        <Age>{age}세</Age>

        <SectionTitle>기초 정보</SectionTitle>
        <PatientInfoItem>키: {patientInfo.height} cm</PatientInfoItem>
        <PatientInfoItem>몸무게: {patientInfo.weight} kg</PatientInfoItem>
        <PatientInfoItem>혈압: {patientInfo.bloodPressure}</PatientInfoItem>
        <PatientInfoItem>운동량: 주 2회 가벼운 운동</PatientInfoItem>
        <PatientInfoItem>음주: 일주일에 소주 3병 정도</PatientInfoItem>
        <PatientInfoItem>담배: 비흡연</PatientInfoItem>

        <SectionTitle>병력</SectionTitle>
        <TagList>
          {patientInfo.pastDiseases.split(', ').map(disease => <Tag key={disease}>{disease}</Tag>)}
          {patientInfo.currentMedications.split(', ').map(medication => <Tag key={medication}>{medication}</Tag>)}
          {patientInfo.allergies.split(', ').map(allergy => <Tag key={allergy}>{allergy}_알레르기</Tag>)}
        </TagList>
      </Content>
    </Section>
  );
}

export default LeftProfileBar;
