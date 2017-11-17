import styled from 'styled-components';
import { Markdown } from '../../components';
import { DownloadList } from '../../config';

export default () => {
  const View = styled.div`
    margin-left: 2rem;
  `;

  const DownloadBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
  `;

  const Card = styled.a`
    display: flex;
    padding: 2rem;
    width: 400px;
    box-shadow: 0 6px 32px 0 rgba(0, 0, 0, 0.08);
    margin-right: 2rem;
    margin-bottom: 2rem;
  `;

  const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  `;

  const Desc = styled.div`
    color: #999;
    font-size: 0.9rem;
  `;

  const Md =
    '# 资源下载\n这里提供 Panda Design 相关设计资源和设计工具的下载，更多设计资源正在整理和完善中。';

  const DownloadCard = ({ url, icon, title, desc }) => {
    const Icon = styled.div`
      width: 50px;
      height: 50px;
      background: url(/img/icon-${icon}.png);
      background-size: 100%;
      margin-right: 1rem;
      border-radius: 16%;
    `;

    return (
      <Card href={url}>
        <Icon />
        <div>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </div>
      </Card>
    );
  };
  return (
    <View>
      <Markdown data={Md} />
      <DownloadBox>
        {DownloadList.map((item, key) => (
          <DownloadCard
            key={key}
            url={item.url}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </DownloadBox>
    </View>
  );
};
