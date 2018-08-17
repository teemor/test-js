window.console && window.console.log("%c懒人的小窝 %c Copyright © 2016-%s", " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em;", "font-size:12px;color:#24B5EA;", (new Date).getFullYear());
console.log("%c 温馨提示：发现Bug请及时跟我反馈(・ω・)", "font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;color:#F87D53;");
console.log("%c 这里有我的联系方式(o^.^o) http://suppore.cn/about.html", "color:#00cc00");
$(document).pjax("a[target!=_blank]", pjax_id, {
	fragment: pjax_id,
	timeout: 6E3
});
$(document).on("submit", "form:not(#commentform,#input)", function(d) {
	$.pjax.submit(d, pjax_id, {
		fragment: pjax_id,
		timeout: 6E3
	})
});
$(document).on("pjax:send", function() {
	$(".loading,.loading1").css("display", "block");
	$(pjax_id).addClass("xg")
});
$(document).on("pjax:complete", function() {
	$(".loading,.loading1").css("display", "none");
	$(pjax_id).removeClass("xg");
	$("a[href$=jpg],a[href$=jpeg],a[href$=gif],a[href$=png]").addClass("highslide").each(function() {
		this.onclick = function() {
			return hs.expand(this)
		}
	});
	$(function() {
		$("[data-toggle='tooltip']").tooltip()
	});
	$("#mySlide").carousel({
		interval: 2E3
	});
	pjaxcn()
});
$(document).on("click", "#mobile-tab-menu > li:not(.disable)", function() {
	$(this).parent("ul").children("li").removeClass("current");
	$(this).addClass("current");
	var d = $(this).data("tab");
	$.each({
		context: ".context",
		related: ".related-posts-box",
		comments: "#comments"
	}, function(g, h) {
		g == d ? $(h).removeClass("mobile-hide") : $(h).addClass("mobile-hide")
	})
});
$(document).on("click", ".post-meta-li > .tags", function() {
	$(this).children(".tags-list").toggle()
});
$(document).on("click", ".post-meta-li > .tags .tags-list", function(d) {
	d.stopPropagation()
});
$(document).ready(function() {
	$(".navbar-nav li").click(function() {
		$("li").removeClass("active");
		$(this).addClass("active")
	})
});
$(".navbar-nav li.dropdown").mouseover(function() {
	$(this).addClass("open")
});
$(".navbar-nav li.dropdown").mouseleave(function() {
	$(this).removeClass("open")
});
$(function() {
	$("[data-toggle='tooltip']").tooltip()
});
$("#mySlide").carousel({
	interval: 2E3
});
$(window).scroll(function() {
	50 < $(this).scrollTop() ? $(".backtop").fadeIn() : $(".backtop").fadeOut()
});
$("#qqhao").blur(function() {
	$("#qqhao").attr("disabled", !1);
	$("#ajaxloading").html('<img src="' + pjaxtheme + 'img/loading.gif"><a style="font-size:12px;margin-left:5px;">正在获取QQ信息..</a>');
	$.ajax({
		url: "http://suppore.cn/content/templates/FLY/inc/nic.php?qq=" + $("#qqhao").val(),
		type: "GET",
		dataType: "jsonp",
		success: function(d) {
			d.name ? ($("#ajaxloading").hide(), $("#author").val(d.name), $("#email").val($("#qqhao").val() + "@qq.com"), $("#url").val("http://user.qzone.qq.com/" + $("#qqhao").val()), $("#qqhao").attr("disabled", !0)) : ($("#ajaxloading").hide(), $(".comment-form-qq").removeAttr("disabled"), $("#error").html('<img src="' + pjaxtheme + 'img/error.png"> qq账号错误').show().fadeOut(4E3))
		},
		error: function(d, g, h) {
			$("#ajaxloading").hide();
			$(".comment-form-qq").removeAttr("disabled");
			$("#error").html('<img src="' + pjaxtheme + 'img/error.png"> qq账号错误').show().fadeOut(4E3)
		}
	})
});
$("#submit").on("click", function() {
	$(".faceshow").hide();
	$("#ajaxloading1").html('<img style="margin-left:5px;" src="' + pjaxtheme + 'img/loading.gif"><a style="font-size:12px;margin-left:5px;">正在提交评论..</a>');
	$.ajax({
		url: $("#commentform").attr("action"),
		type: "post",
		data: $("#commentform").serialize(),
		success: function(d) {
			var g = /<div class=\"main\">[\r\n]*<p>(.*?)<\/p>/i;
			if (g.test(d)) $("#error1").html(d.match(g)[1]).show().fadeOut(2500), $("#ajaxloading1").hide();
			else {
				var h = $(".comment").length ? $(".comment").attr("id").split("-") : 0;
				$("#comments2").html($(d).find("#comments2").html());
				$(".comment-info").hover(function() {
					$(this).find(".comment-reply").show()
				}, function() {
					$(this).find(".comment-reply").hide()
				});
				$.pjax.reload(pjax_id, {
					fragment: pjax_id,
					timeout: 6E3
				});
				0 != h && $("html,body").animate(function() {
					$("#comment-" + h[1]).offset().top - 260
				}, 1E3)
			}
		}
	});
	return !1
});
$(".downbtn").click(function() {
	$(".down-open").slideDown(300);
	$(".zhezhao").show()
});
$(".down-close a").click(function() {
	$(".down-open").slideUp(300);
	$(".zhezhao").hide()
});
$(".fly-search-s").click(function() {
	$(".search-forms").addClass("is-visible")
});
$(".search-go,.close-search").click(function() {
	$(".search-forms").removeClass("is-visible")
});
$(".navsearch").click(function() {
	$(".navbar-form .input-group>.form-control").animate({
		width: "100%"
	}, 500)
});
$(".navsearch").blur(function() {
	$(".navbar-form .input-group>.form-control").animate({
		width: "20%"
	}, 500)
});
$('img[src*="checkcode.php"]').attr("title", "单击刷新验证码").click(function() {
	this.src = this.src.replace(/\?.*$/, "") + "?" + (new Date).getTime()
});
$(".archives").find("ul").hide();
$(".archives").find("ul:first,ul:eq(1),ul:eq(2),ul:eq(3)").show();
$(".archives h4").click(function() {
	$(this).next("ul").slideToggle("fast")
});
$(".toggler").click(function() {
	"展开归档" == jQuery(this).text() ? ($(".archives").find("ul").show(), jQuery(this).text("折叠归档")) : ($(".archives").find("ul").hide(), jQuery(this).text("展开归档"));
	return !1
});

function qqhaoma() {
	$("#qqhao").blur(function() {
		$("#qqhao").attr("disabled", !1);
		$("#ajaxloading").html('<img src="' + pjaxtheme + 'img/loading.gif"><a style="font-size:12px;margin-left:5px;">正在获取QQ信息..</a>');
		$.ajax({
			url: "http://suppore.cn/content/templates/FLY/inc/nic.php?qq=" + $("#qqhao").val(),
			type: "GET",
			dataType: "jsonp",
			success: function(d) {
				d.name ? ($("#ajaxloading").hide(), $("#author").val(d.name), $("#email").val($("#qqhao").val() + "@qq.com"), $("#url").val("http://user.qzone.qq.com/" + $("#qqhao").val()), $("#qqhao").attr("disabled", !0)) : ($("#ajaxloading").hide(), $(".comment-form-qq").removeAttr("disabled"), $("#error").html('<img src="' + pjaxtheme + 'img/error.png"> qq账号错误').show().fadeOut(4E3))
			},
			error: function(d, g, h) {
				$("#ajaxloading").hide();
				$(".comment-form-qq").removeAttr("disabled");
				$("#error").html('<img src="' + pjaxtheme + 'img/error.png"> qq账号错误').show().fadeOut(4E3)
			}
		})
	})
}
function tops() {
	$("html,body").animate({
		scrollTop: 0
	})
}

function embedSmiley() {
	"none" == $(".smiley-box").css("display") ? $(".smiley-box").slideDown(200) : $(".smiley-box").slideUp(200)
}

function grin(d) {
	var g;
	d = " " + d + " ";
	if (document.getElementById("comment") && "textarea" == document.getElementById("comment").type) g = document.getElementById("comment");
	else return !1;
	if (document.selection) g.focus(), sel = document.selection.createRange(), sel.text = d, g.focus();
	else if (g.selectionStart || "0" == g.selectionStart) {
		var h = g.selectionEnd,
			k = h;
		g.value = g.value.substring(0, g.selectionStart) + d + g.value.substring(h, g.value.length);
		k += d.length;
		g.focus();
		g.selectionStart = k;
		g.selectionEnd = k
	} else g.value += d, g.focus()
}

function commentReply(d, g) {
	var h = document.getElementById("comment-post");
	g.style.display = "none";
	document.getElementById("cancel-reply").style.display = "";
	document.getElementById("comment-pid").value = d;
	g.parentNode.parentNode.appendChild(h)
}

function cancelReply() {
	var d = document.getElementById("comment-place"),
		g = document.getElementById("comment-post");
	document.getElementById("comment-pid").value = 0;
	$(".reply i").css({
		display: ""
	});
	document.getElementById("cancel-reply").style.display = "none";
	d.appendChild(g)
}

function guidang() {
	$(".toggler").click(function() {
		"展开归档" == jQuery(this).text() ? ($(".archives").find("ul").show(), jQuery(this).text("折叠归档")) : ($(".archives").find("ul").hide(), jQuery(this).text("展开归档"));
		return !1
	});
	$(".archives").find("ul").hide();
	$(".archives").find("ul:first,ul:eq(1),ul:eq(2),ul:eq(3)").show();
	$(".archives h4").click(function() {
		$(this).next("ul").slideToggle("fast")
	})
}

function ajaxcomments() {
	$("#submit").on("click", function() {
		$(".faceshow").hide();
		$("#ajaxloading1").html('<img style="margin-left:5px;" src="' + pjaxtheme + 'img/loading.gif"><a style="font-size:12px;margin-left:5px;">正在提交评论..</a>');
		$.ajax({
			url: $("#commentform").attr("action"),
			type: "post",
			data: $("#commentform").serialize(),
			success: function(d) {
				var g = /<div class=\"main\">[\r\n]*<p>(.*?)<\/p>/i;
				if (g.test(d)) $("#error1").html(d.match(g)[1]).show().fadeOut(2500), $("#ajaxloading1").hide();
				else {
					var h = $(".comment").length ? $(".comment").attr("id").split("-") : 0;
					$("#comments2").html($(d).find("#comments2").html());
					$(".comment-info").hover(function() {
						$(this).find(".comment-reply").show()
					}, function() {
						$(this).find(".comment-reply").hide()
					});
					$.pjax.reload(pjax_id, {
						fragment: pjax_id,
						timeout: 6E3
					});
					0 != h && $("html,body").animate(function() {
						$("#comment-" + h[1]).offset().top - 260
					}, 1E3)
				}
			}
		});
		return !1
	})
}

function ajaxcheckcode() {
	$('img[src*="checkcode.php"]').attr("title", "点击刷新验证码").click(function() {
		this.src = this.src.replace(/\?.*$/, "") + "?" + (new Date).getTime()
	});
	$(document).ready(function() {
		(function() {
			var d = {
				action: "getZan"
			};
			$(".qingzz_zan_dynamic").each(function(g) {
				d[g] = $(this).attr("id").substring(10)
			});
			$.post("" + qingzz_zan_pluginpath + "qingzz_zan_action.php", d, function(d) {
				$.each(d, function(g) {
					$("#" + g).find(".qingzz_zan_num").text(d[g]);
					$(".qingzz_zan_static").find(".qingzz_zan_num").text(d[g]);
					"" == $.getCookie(g) ? $("#" + g).find(".qingzz_zan_txt").text("点赞") : ($("#" + g).find("i").removeClass("fa-thumbs-o-up").addClass("fa-thumbs-up"), $("#" + g).find(".qingzz_zan_txt").text("取消赞"))
				})
			}, "json")
		})();
		$(".qingzz_zan_dynamic").click(function() {
			var d = $(this).find(".qingzz_zan_num"),
				g = $(".qingzz_zan_static").find(".qingzz_zan_num");
			if ("" == $.getCookie($(this).attr("id"))) {
				$.setCookie($(this).attr("id"), $(this).attr("id"), 1);
				$(this).find("i").removeClass("fa-thumbs-o-up").addClass("fa-thumbs-up");
				$(this).find(".qingzz_zan_txt").text("取消赞");
				var h = parseInt(d.text()) + 1;
				d.text(h);
				g.text(h);
				$.tipsBox({
					obj: d,
					str: "+1",
					callback: function() {}
				});
				g = {
					action: "addZan"
				};
				g.zanid = $(this).attr("id").substring(10);
				h = "" + qingzz_zan_pluginpath + "qingzz_zan_action.php";
				$.post(h, g, function() {})
			} else $.setCookie($(this).attr("id"), "", -1), $.tipsBox({
				obj: d,
				str: "-1",
				callback: function() {}
			}), $.setCookie($(this).attr("id"), "", -1), $(this).find("i").removeClass("fa-thumbs-up").addClass("fa-thumbs-o-up"), $(this).find(".qingzz_zan_txt").text("点赞"), h = parseInt(d.text()) - 1, d.text(h), g.text(h), g = {
				action: "minZan"
			}, g.zanid = $(this).attr("id").substring(10), h = "" + qingzz_zan_pluginpath + "qingzz_zan_action.php", $.post(h, g, function() {}), $.tipsBox({
				obj: d,
				str: "-1",
				callback: function() {}
			})
		});
		$(".qingzz_zan_static").click(function() {
			$(".qingzz_zan_dynamic").trigger("click")
		});
		(function(d) {
			d.setCookie || d.extend({
				setCookie: function(d, h, k) {
					try {
						if (!d) return !1;
						var g = new Date;
						g.setDate(g.getDate() + k);
						var m = escape(h) + (null == k ? "" : "; expires=" + g.toUTCString());
						document.cookie = d + "=" + m
					} catch (n) {}
					return ""
				}
			});
			d.getCookie || d.extend({
				getCookie: function(d) {
					try {
						var g, k, l, m = document.cookie.split(";");
						for (g = 0; g < m.length; g++) if (k = m[g].substr(0, m[g].indexOf("=")), l = m[g].substr(m[g].indexOf("=") + 1), k = k.replace(/^\s+|\s+$/g, ""), k == d) return l
					} catch (n) {}
					return ""
				}
			})
		})(jQuery);
		(function(d) {
			d.extend({
				tipsBox: function(g) {
					g = d.extend({
						obj: null,
						str: "+1",
						startSize: "12px",
						endSize: "30px",
						interval: 600,
						color: "red",
						callback: function() {}
					}, g);
					d("body").append("<span class='num'>" + g.str + "</span>");
					var h = d(".num"),
						k = g.obj.offset().left + g.obj.width() / 2,
						l = g.obj.offset().top / 100 * 98;
					h.css({
						position: "absolute",
						left: k + "px",
						top: l + "px",
						"z-index": 9999,
						"font-size": g.startSize,
						"line-height": g.endSize,
						color: g.color
					});
					h.animate({
						"font-size": g.endSize,
						opacity: "0",
						top: l - parseInt(g.endSize) + "px"
					}, g.interval, function() {
						h.remove();
						g.callback()
					})
				}
			})
		})(jQuery)
	})
}

function pjaxcn() {
	$(".close-sidebar").click(function() {
		RootCookies.SetCookie("cbl_sidebar", "no", 7);
		$(".close-sidebar,.sidebar").hide();
		$(".show-sidebar").show();
		$(".content").animate({
			width: "1476px"
		}, "slow")
	});
	$(".show-sidebar").click(function() {
		RootCookies.SetCookie("cbl_sidebar", "no", -1);
		$(".show-sidebar").hide();
		$(".close-sidebar").show();
		setTimeout(function() {
			$(".sidebar").show()
		}, 1E3);
		$(".content").animate({
			width: "1090px"
		}, "slow")
	});
	$(".downbtn").click(function() {
		$(".down-open").slideDown(300);
		$(".zhezhao").show()
	});
	$(".down-close a").click(function() {
		$(".down-open").slideUp(300);
		$(".zhezhao").hide()
	});
	$(".J_showAllShareBtn").click(function() {
		$(".bdsharebuttonbox").slideToggle(300);
		$(".panel-reward").toggle(!1)
	});
	$(".pay-author").click(function() {
		$(".panel-reward").slideToggle(300);
		$(".bdsharebuttonbox").toggle(!1)
	});
	window.RootCookies = {};
	window.RootCookies.SetCookie = function(d, g, h) {
		var k = new Date;
		k.setTime(k.getTime() + 864E5 * h);
		document.cookie = d + "=" + escape(g) + (null == h ? "" : ";expires=" + k.toGMTString()) + ";path=/"
	};
	sh_highlightDocument("../content/plugins/SHJS_for_Emlog/lang/", ".min.js");
	try {
		ajaxcheckcode()
	} catch (d) {}
	try {
		close_sidebar()
	} catch (d) {}
	try {
		ajaxcomments()
	} catch (d) {}
	try {
		xueshengka()
	} catch (d) {}
	try {
		guidang()
	} catch (d) {}
	try {
		qqhaoma()
	} catch (d) {}
}
jQuery(document).ready(function() {
	var d;
	$(".bulletin").hover(function() {
		clearInterval(d)
	}, function() {
		d = setInterval(function() {
			var d = $(".bulletin ul");
			d.find("li:last").height();
			d.animate({
				marginTop: "5px"
			}, 300, function() {
				d.find("li:last").prependTo(d);
				d.find("li:first").hide();
				d.css({
					marginTop: 0
				});
				d.find("li:first").fadeIn(1E3)
			})
		}, 5E3)
	}).trigger("mouseleave")
});

function a(d, g, h) {
	if (document.selection) d.focus(), sel = document.selection.createRange(), h ? sel.text = g + sel.text + h : sel.text = g, d.focus();
	else if (d.selectionStart || "0" == d.selectionStart) {
		var k = d.selectionStart,
			l = d.selectionEnd,
			m = l;
		h ? d.value = d.value.substring(0, k) + g + d.value.substring(k, l) + h + d.value.substring(l, d.value.length) : d.value = d.value.substring(0, k) + g + d.value.substring(l, d.value.length);
		h ? m += g.length + h.length : m += g.length - l + k;
		k == l && h && (m -= h.length);
		d.focus();
		d.selectionStart = m;
		d.selectionEnd = m
	} else d.value += g + h, d.focus()
}
c = document.getElementById("comment") || 0;
window.SIMPALED = {};
window.SIMPALED.Editor = {
	daka1: function() {
		a(c, "[code]滴！学生卡！打卡时间：" + b, "，请上车的乘客系好安全带~[/code]")
	},
	zan: function() {
		a(c, "[blockquote][F9] 写得好好哟，文章大气磅礴，高山流水，有古人之风！！[/blockquote]")
	},
	cai: function() {
		a(c, "[blockquote][F14] 骚年,我怀疑你写了一篇假的文章！[/blockquote]")
	}
};

function daka() {
	var d = new Date;
	d.getFullYear();
	d.getMonth();
	d.getDate();
	var g = d.getHours(),
		h = d.getMinutes(),
		k = d.getSeconds(),
		d = " ";
	0 <= g && 3 > g ? d += "深夜" : 3 <= g && 7 > g ? d += "凌晨" : 7 <= g && 12 > g ? d += "上午" : 11 <= g && 13 > g ? (d += "中午", 13 == g && (g -= 12)) : 13 <= g && 17 > g ? (d += "下午", g -= 12) : 17 <= g && 19 > g ? (d += "傍晚", g -= 12) : 19 <= g && 24 >= g && (d += "晚上", g -= 12);
	d += g + "时" + h + "分" + k + "秒";
	document.getElementById("comment").value = document.getElementById("comment").value + "[code]签到成功！签到时间：" + d + "，签到运到，生活乐逍遥！[/code]";
	$(".daka").hide();
	$("#comment").focus()
}

function xueshengka() {
	function d(d, g, h) {
		if (document.selection) d.focus(), sel = document.selection.createRange(), h ? sel.text = g + sel.text + h : sel.text = g, d.focus();
		else if (d.selectionStart || "0" == d.selectionStart) {
			var k = d.selectionStart,
				l = d.selectionEnd,
				m = l;
			h ? d.value = d.value.substring(0, k) + g + d.value.substring(k, l) + h + d.value.substring(l, d.value.length) : d.value = d.value.substring(0, k) + g + d.value.substring(l, d.value.length);
			h ? m += g.length + h.length : m += g.length - l + k;
			k == l && h && (m -= h.length);
			d.focus();
			d.selectionStart = m;
			d.selectionEnd = m
		} else d.value += g + h, d.focus()
	}
	var g = (new Date).toLocaleTimeString(),
		h = document.getElementById("comment") || 0;
	window.SIMPALED = {};
	window.SIMPALED.Editor = {
		daka1: function() {
			d(h, "[code]滴！学生卡！打卡时间：" + g, "，请上车的乘客系好安全带~[/code]")
		},
		zan: function() {
			d(h, "[blockquote][F9] 写得好好哟，文章大气磅礴，高山流水，有古人之风！[/blockquote]")
		},
		cai: function() {
			d(h, "[blockquote][F14] 骚年,我怀疑你写了一篇假的文章！[/blockquote]")
		}
	}
}
var a_idx = 0;
jQuery(document).ready(function(d) {
	d("body").click(function(g) {
		var h = "富强 民主 文明 和谐 自由 平等 公正 法治 爱国 敬业 诚信 友善".split(" "),
			k = d("<span/>").text(h[a_idx]);
		a_idx = (a_idx + 1) % h.length;
		h = g.pageY;
		k.css({
			"z-index": 99999,
			top: h - 20,
			left: g.pageX,
			position: "absolute",
			color: "#0c0"
		});
		d("body").append(k);
		k.animate({
			top: h - 180,
			opacity: 0
		}, 1E3, function() {
			k.remove()
		})
	})
});
$(function() {
	function d() {
		document_height = $(document).height();
		scroll_so_far = $(window).scrollTop();
		window_height = $(window).height();
		max_scroll = document_height - window_height;
		scroll_percentage = scroll_so_far / (max_scroll / 100);
		$("#load").width(scroll_percentage + "%")
	}
	$(window).scroll(function() {
		d()
	});
	$(window).resize(function() {
		d()
	})
});
var e = document.title,
	f;
document.addEventListener("visibilitychange", function() {
	document.hidden ? ($('[rel="shortcut icon"]').attr("href", "http://suppore.cn/image/eroor.ico"), document.title = "喔唷，崩溃啦！", clearTimeout(f)) : ($('[rel="shortcut icon"]').attr("href", "http://suppore.cn/favicon.ico"), document.title = "(/≧▽≦/)咦！又好了！", f = setTimeout(function() {
		document.title = e
	}, 2E3))
}, !1);

function dashangToggle() {
	$(".shang_box").fadeToggle()
}

function changeItem(d) {
	for (var g = 0; 3 > g; g++) g == d ? document.getElementById("sl_shang" + g).style.display = "block" : document.getElementById("sl_shang" + g).style.display = "none"
}
function opay() {
	document.getElementById("sl_shang").target = "_parent"
}(function(d, g) {
	var h = {
		Other: function() {
			d(g).on("load", function() {
				var h = "150%",
					l = "-100%";
				d(".progressbar i").css("left", "100%");
				setTimeout(function() {
					d(".progressbar i").css({
						width: "2px",
						"border-radius": "2px",
						"background-color": "#47CD38"
					}).addClass("s3600");
					var k = function() {
							d(".progressbar i").each(function() {
								var g = Math.ceil(100 * Math.random()) + "%",
									h = Math.ceil(50 * Math.random()) + "px";
								d(this).css({
									left: g,
									width: h
								})
							})
						},
						n = setInterval(k, 3600),
						p = function() {
							if (8 > d(".progressbar i").length) {
								var m = 1 == Math.ceil(2 * Math.random()) ? "-300%" : "200%";
								d(".progressbar i:last").clone().css({
									left: m
								}).appendTo(d(".progressbar"))
							} else g.clearInterval(q), 1 == Math.ceil(2 * Math.random()) ? (h = "-150%", l = "100%") : (h = "150%", l = "-100%"), setTimeout(function() {
								var m = d(".progressbar i:last").clone().removeClass("s3600").css({
									left: l,
									width: "100%",
									"background-color": "#E25A5A"
								});
								d(".progressbar i").removeClass("s3600").css({
									left: h
								});
								setTimeout(function() {
									g.clearInterval(n);
									d(".progressbar i").remove();
									m.appendTo(d(".progressbar"));
									setTimeout(function() {
										d(".progressbar i").css({
											left: h
										});
										setTimeout(function() {
											d(".progressbar i").addClass("s3600").css({
												width: "10px",
												"background-color": "#3ABBF7"
											});
											n = setInterval(k, 3600);
											q = setInterval(p, 7200)
										}, 600)
									}, 600)
								}, 600)
							}, 7200)
						},
						q = setInterval(p, 7200)
				}, 1E3)
			})
		}
	};
	d(function() {
		h.Other()
	})
})(jQuery, window);
var bigfa_scroll = {
	drawCircle: function(d, g, h) {
		var k = jQuery(d).width(),
			l = jQuery(d).height(),
			m = parseInt(k / 2.2),
			n = k / 2,
			p = jQuery(d)[0];
		d.split("#");
		d = p.getContext("2d");
		var p = 2 * Math.PI,
			q = Math.PI / 2;
		d.clearRect(0, 0, k, l);
		d.beginPath();
		d.strokeStyle = h;
		d.lineCap = "square";
		d.closePath();
		d.fill();
		d.lineWidth = 3;
		h = d.getImageData(0, 0, k, k);
		g /= 100;
		d.putImageData(h, 0, 0);
		d.beginPath();
		d.arc(n, n, m, -q, p * g - q, !1);
		d.stroke()
	},
	backToTop: function(d) {
		d.click(function() {
			jQuery("body,html").animate({
				scrollTop: 0
			}, 800);
			return !1
		})
	},
	scrollHook: function(d, g) {
		g = g ? g : "#fff";
		d.scroll(function() {
			var h = jQuery(document).height() - jQuery(window).height(),
				k = jQuery(".per");
			defaultScroll = d.scrollTop();
			var h = parseInt(defaultScroll / h * 100),
				l = jQuery("#backtoTop");
			0 < l.length && (200 < d.scrollTop() ? l.addClass("button--show") : l.removeClass("button--show"), k.attr("data-percent", h), bigfa_scroll.drawCircle("#backtoTopCanvas", h, g))
		})
	}
};
jQuery(document).ready(function() {
	jQuery("body").append('<div id="backtoTop" data-action="gototop"><canvas id="backtoTopCanvas" width="48" height="48"></canvas><div class="per"></div></div>');
	var d = bigfa_scroll;
	d.backToTop(jQuery("#backtoTop"));
	d.scrollHook(jQuery(window), "#FCDA14")
});
var now = new Date;

function createtime() {
	var d = new Date("06/23/2016 00:00:00");
	now.setTime(now.getTime() + 250);
	days = (now - d) / 1E3 / 60 / 60 / 24;
	dnum = Math.floor(days);
	hours = (now - d) / 1E3 / 60 / 60 - 24 * dnum;
	hnum = Math.floor(hours);
	1 == String(hnum).length && (hnum = "" + hnum);
	minutes = (now - d) / 1E3 / 60 - 1440 * dnum - 60 * hnum;
	mnum = Math.floor(minutes);
	1 == String(mnum).length && (mnum = "0" + mnum);
	seconds = (now - d) / 1E3 - 86400 * dnum - 3600 * hnum - 60 * mnum;
	snum = Math.round(seconds);
	1 == String(snum).length && (snum = "0" + snum);
	document.getElementById("timeDate").innerHTML = "运行：" + dnum + "天";
	document.getElementById("times").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒"
}
setInterval("createtime()", 250);
$("body").bind("copy", function(d) {
	if ("undefined" != typeof window.getSelection) {
		var g = document.getElementsByTagName("body")[0];
		d = window.getSelection();
		if (!(30 > ("" + d).length)) {
			var h = document.createElement("div");
			h.style.position = "absolute";
			h.style.left = "-99999px";
			g.appendChild(h);
			h.appendChild(d.getRangeAt(0).cloneContents());
			"PRE" == d.getRangeAt(0).commonAncestorContainer.nodeName && (h.innerHTML = "<pre>" + h.innerHTML + "</pre>");
			h.innerHTML += "<br /><br />原文地址：" + document.location.href + "";
			d.selectAllChildren(h);
			window.setTimeout(function() {
				g.removeChild(h)
			}, 200)
		}
	}
});