import { Table } from 'antd';
import { connect } from 'dva';
import styled from 'styled-components';
import { Comment, Markdown } from '../../components';
import buildMessage from '../../utils/buildMessage';
import style from './index.scss';

function mapStateToProps(state) {
  return {
    bearychat: state.bearychat,
    robot: state.robot,
    loading: state.loading.global,
  };
}

export default connect(
  mapStateToProps
)(({ bearychat = [], robot = [], loading }) => {
  let data;
  if (!loading) data = buildMessage(bearychat, robot);

  const View = styled.div`
    width: 100%;
    padding: 0 1rem;
  `;

  const Flex = styled.div`display: flex;`;
  const Content = styled.div`
    flex: 1;
    margin: 0 1rem;
  `;
  const Title = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  `;
  const Attachments = styled.div``;

  const Date = styled.div`color: #999;`;

  const columns = [
    {
      title: 'post',
      dataIndex: 'title',
      render: (text, record) => {
        const Avatar = styled.div`
          width: 56px;
          height: 56px;
          background: url(${record.url});
          background-size: 100%;
          border-radius: 50%;
        `;

        let List;
        if (record.content) {
          List = record.content.map((item, key) => {
            return (
              <Markdown className={style.item} key={key} data={item.text} />
            );
          });
        }
        return (
          <Flex>
            <Avatar />
            <Content>
              <Title>{record.name}</Title>
              <Markdown data={text} />
              <Attachments>{List}</Attachments>
            </Content>
            <Date>{record.date}</Date>
          </Flex>
        );
      },
    },
  ];

  return (
    <View>
      <Table
        className={style.table}
        rowClassName={() => style.row}
        showHeader={false}
        columns={columns}
        dataSource={data}
        loading={loading}
      />
      <Comment />
    </View>
  );
});
