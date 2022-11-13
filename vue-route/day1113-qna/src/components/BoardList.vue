<template>
    <div class="table-section">
        <v-simple-table class="qna-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일자</th>
                        <th>조회수</th>
                    </tr>
                </thead>
        </v-simple-table>
    </div>
</template>
    
  <script>
  
  export default {
  name: 'BoardList',
  
  };
  </script>
<style>
    .table-section{
        margin: 10px 300px;
    }
    .qna-table{
        text-align: center;
    }
</style>