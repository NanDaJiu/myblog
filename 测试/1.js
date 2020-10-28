<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

    <div id="header" class="wrap">
    <div id="banner"></div>
    <div id="navbar">
    <div class="userMenu">
    <ul>
    <li class="current"><font color="BLACK">欢迎您，<strong>${LoginUser.uname }</strong></font>&nbsp;&nbsp;&nbsp;</li>
<li><a href="BooksShowServlet">首页</a></li>
<li><a href="orderlist.jsp">我的订单</a></li>
<li><a href="CartShowServlet">购物车</a></li>
<li><a href="LoginOutServlet">注销</a></li>
</ul>
</div>
</div>
</div> 