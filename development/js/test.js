/** @license
 * Copyright (c) 2015 NightDev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without limitation of the rights to use, copy, modify, merge,
 * and/or publish copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice, any copyright notices herein, and this permission
 * notice shall be included in all copies or substantial portions of the Software,
 * the Software, or portions of the Software, may not be sold for profit, and the
 * Software may not be distributed nor sub-licensed without explicit permission
 * from the copyright owner.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Should any questions arise concerning your usage of this Software, or to
 * request permission to distribute this Software, please contact the copyright
 * holder at http://nightdev.com/contact
 *
 * ---------------------------------
 *
 *  Unofficial TLDR:
 *  Free to modify for personal use
 *  Need permission to distribute the code
 *  Can't sell addon or features of the addon
 *
 */
/** @license
 * Gritter for jQuery
 * http://www.boedesign.com/
 *
 * Copyright (c) 2014 Jordan Boesch
 * Dual licensed under the MIT and GPL licenses.
 */
/** @license
 * Jade
 * https://github.com/visionmedia/jade
 *
 * Copyright (c) 2009-2014 TJ Holowaychuk (tj@vision-media.ca)
 * Licensed under the MIT license.
 */
!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)module.exports = e(); else if ("function" == typeof define && define.amd)define([], e); else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.jade = e()
    }
}(function () {
    return function e(t, n, a) {
        function o(i, r) {
            if (!n[i]) {
                if (!t[i]) {
                    var c = "function" == typeof require && require;
                    if (!r && c)return c(i, !0);
                    if (s)return s(i, !0);
                    var l = new Error("Cannot find module '" + i + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var d = n[i] = {exports: {}};
                t[i][0].call(d.exports, function (e) {
                    var n = t[i][1][e];
                    return o(n ? n : e)
                }, d, d.exports, e, t, n, a)
            }
            return n[i].exports
        }

        for (var s = "function" == typeof require && require, i = 0; i < a.length; i++)o(a[i]);
        return o
    }({
        1: [function (e, t, n) {
            "use strict";
            function a(e) {
                return null != e && "" !== e
            }

            function o(e) {
                return (Array.isArray(e) ? e.map(o) : e && "object" == typeof e ? Object.keys(e).filter(function (t) {
                    return e[t]
                }) : [e]).filter(a).join(" ")
            }

            function s(e) {
                return r[e] || e
            }

            function i(e) {
                var t = String(e).replace(c, s);
                return t === "" + e ? e : t
            }

            n.merge = function l(e, t) {
                if (1 === arguments.length) {
                    for (var n = e[0], o = 1; o < e.length; o++)n = l(n, e[o]);
                    return n
                }
                var s = e["class"], i = t["class"];
                (s || i) && (s = s || [], i = i || [], Array.isArray(s) || (s = [s]), Array.isArray(i) || (i = [i]), e["class"] = s.concat(i).filter(a));
                for (var r in t)"class" != r && (e[r] = t[r]);
                return e
            }, n.joinClasses = o, n.cls = function (e, t) {
                for (var a = [], s = 0; s < e.length; s++)a.push(t && t[s] ? n.escape(o([e[s]])) : o(e[s]));
                var i = o(a);
                return i.length ? ' class="' + i + '"' : ""
            }, n.style = function (e) {
                return e && "object" == typeof e ? Object.keys(e).map(function (t) {
                    return t + ":" + e[t]
                }).join(";") : e
            }, n.attr = function (e, t, a, o) {
                return "style" === e && (t = n.style(t)), "boolean" == typeof t || null == t ? t ? " " + (o ? e : e + '="' + e + '"') : "" : 0 == e.indexOf("data") && "string" != typeof t ? (-1 !== JSON.stringify(t).indexOf("&") && console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"), t && "function" == typeof t.toISOString && console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0"), " " + e + "='" + JSON.stringify(t).replace(/'/g, "&apos;") + "'") : a ? (t && "function" == typeof t.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"), " " + e + '="' + n.escape(t) + '"') : (t && "function" == typeof t.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"), " " + e + '="' + t + '"')
            }, n.attrs = function (e, t) {
                var a = [], s = Object.keys(e);
                if (s.length)for (var i = 0; i < s.length; ++i) {
                    var r = s[i], c = e[r];
                    "class" == r ? (c = o(c)) && a.push(" " + r + '="' + c + '"') : a.push(n.attr(r, c, !1, t))
                }
                return a.join("")
            };
            var r = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}, c = /[&<>"]/g;
            n.escape = i, n.rethrow = function d(t, n, a, o) {
                if (!(t instanceof Error))throw t;
                if (!("undefined" == typeof window && n || o))throw t.message += " on line " + a, t;
                try {
                    o = o || e("fs").readFileSync(n, "utf8")
                } catch (s) {
                    d(t, null, a)
                }
                var i = 3, r = o.split("\n"), c = Math.max(a - i, 0), l = Math.min(r.length, a + i), i = r.slice(c, l).map(function (e, t) {
                    var n = t + c + 1;
                    return (n == a ? "  > " : "    ") + n + "| " + e
                }).join("\n");
                throw t.path = n, t.message = (n || "Jade") + ":" + a + "\n" + i + "\n\n" + t.message, t
            }, n.DebugItem = function (e, t) {
                this.lineno = e, this.filename = t
            }
        }, {fs: 2}], 2: [function () {
        }, {}]
    }, {}, [1])(1)
}), function (e) {
    !function t(e, n, a) {
        function o(i, r) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!r && c)return c(i, !0);
                    if (s)return s(i, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
                var l = n[i] = {exports: {}};
                e[i][0].call(l.exports, function (t) {
                    var n = e[i][1][t];
                    return o(n ? n : t)
                }, l, l.exports, t, e, n, a)
            }
            return n[i].exports
        }

        for (var s = "function" == typeof require && require, i = 0; i < a.length; i++)o(a[i]);
        return o
    }({
        1: [function (e, t) {
            t.exports = ["nightbot", "moobot", "xanbot"]
        }, {}],
        2: [function (e, t, n) {
            n.tmi = e("./chat/tmi"), n.templates = e("./chat/templates"), n.takeover = e("./chat/takeover"), n.emotes = e("./chat/emotes"), n.helpers = e("./chat/helpers"), n.handlers = e("./chat/handlers"), n.store = e("./chat/store"), n.imagePreview = e("./chat/image-preview")
        }, {
            "./chat/emotes": 3,
            "./chat/handlers": 4,
            "./chat/helpers": 5,
            "./chat/image-preview": 6,
            "./chat/store": 8,
            "./chat/takeover": 9,
            "./chat/templates": 10,
            "./chat/tmi": 11
        }],
        3: [function (t, n) {
            var a = t("./tmi"), o = t("./store"), s = t("./helpers"), i = e.vars;
            n.exports = function () {
                if (e.settings.get("bttvEmotes") === !1)return [];
                var t, n = o.bttvEmotes, r = [];
                return i.userData.isLoggedIn && e.chat.helpers.getEmotes(i.userData.name) && (t = s.getEmotes(i.userData.name)), Object.keys(n).forEach(function (o) {
                    var s = n[o];
                    if (s.restrictions) {
                        if (s.restrictions.channels.length && -1 === s.restrictions.channels.indexOf(e.getChannel()))return;
                        if (s.restrictions.games.length && a().channel && -1 === s.restrictions.games.indexOf(a().channel.game))return;
                        if (s.restrictions.emoticonSet && -1 === t.indexOf(s.restrictions.emoticonSet))return
                    }
                    ("gif" !== s.imageType || e.settings.get("bttvGIFEmotes") === !0) && (s.text = s.code, s.channel || (s.channel = "BetterTTV Emotes", s.badge = "https://cdn.betterttv.net/tags/developer.png"), r.push(s))
                }), r
            }
        }, {"./helpers": 5, "./store": 8, "./tmi": 11}],
        4: [function (t, n, a) {
            var o = t("../vars"), s = t("../helpers/debug"), i = t("./store"), r = t("./tmi"), c = t("./helpers"), l = t("./templates"), d = t("./rooms"), h = t("../features/pinned-highlights"), u = t("../features/embedded-polling"), g = t("../features/channel-state"), p = t("../features/audible-feedback"), m = t("../helpers/colors").getRgb, f = function (e) {
                var t = Math.floor(e / 86400), n = Math.floor(e / 3600) - 24 * t, a = Math.floor(e / 60) - 1440 * t - 60 * n, o = e - 86400 * t - 3600 * n - 60 * a;
                return (t > 0 ? t + " day" + (1 === t ? "" : "s") + ", " : "") + (n > 0 ? n + " hour" + (1 === n ? "" : "s") + ", " : "") + (a > 0 ? a + " minute" + (1 === a ? "" : "s") + ", " : "") + o + " second" + (1 === o ? "" : "s")
            };
            a.commands = function (t) {
                var n, a = t.trim().split(" "), s = a[0].toLowerCase();
                if ("/b" === s)c.ban(a[1]); else if ("/chatters" === s)$.getJSON("https://tmi.twitch.tv/group/user/" + e.getChannel() + "?callback=?").done(function (e) {
                    c.serverMessage("Current Chatters: " + Twitch.display.commatize(e.data.chatter_count), !0)
                }).fail(function () {
                    c.serverMessage("Could not fetch chatter count.", !0)
                }); else if ("/followers" === s)e.TwitchAPI.get("channels/" + e.getChannel() + "/follows").done(function (e) {
                    c.serverMessage("Current Followers: " + Twitch.display.commatize(e._total), !0)
                }).fail(function () {
                    c.serverMessage("Could not fetch follower count.", !0)
                }); else if ("/join" === s)n = e.settings.get("anonChat"), e.settings.save("anonChat", !1), e.settings.set("anonChat", n); else if ("/linehistory" === s)e.settings.save("chatLineHistory", "off" === a[1] ? !1 : !0); else if ("/localmod" === s)c.serverMessage("Local moderators-only mode enabled.", !0), o.localModsOnly = !0; else if ("/localmodoff" === s)c.serverMessage("Local moderators-only mode disabled.", !0), o.localModsOnly = !1; else if ("/localsub" === s)c.serverMessage("Local subscribers-only mode enabled.", !0), o.localSubsOnly = !0; else if ("/localsuboff" === s)c.serverMessage("Local subscribers-only mode disabled.", !0), o.localSubsOnly = !1; else if ("/massunban" === s || ("/unban" === s || "/u" === s) && "all" === a[1])c.massUnban(); else if ("/p" === s || "/purge" === s)c.timeout(a[1], 1); else if ("/part" === s)n = e.settings.get("anonChat"), e.settings.save("anonChat", !0), e.settings.set("anonChat", n); else if ("/shrug" === s)a.shift(), c.sendMessage(a.join(" ") + " Â¯\\_(ãƒ„)_/Â¯"); else if ("/sub" === s)r().tmiRoom.startSubscribersMode(); else if ("/suboff" === s)r().tmiRoom.stopSubscribersMode(); else if ("/t" === s) {
                    var i = 600;
                    isNaN(a[2]) || (i = a[2]), c.timeout(a[1], i)
                } else if ("/u" === s)c.unban(a[1]); else if ("/uptime" === s)e.TwitchAPI.get("streams/" + e.getChannel()).done(function (e) {
                    if (null !== e.stream) {
                        var t = new Date(e.stream.created_at), n = Math.round(Math.abs((Date.now() - (t.getTime() - 60 * t.getTimezoneOffset() * 1e3)) / 1e3));
                        c.serverMessage("Stream uptime: " + f(n), !0)
                    } else c.serverMessage("Stream offline", !0)
                }).fail(function () {
                    c.serverMessage("Could not fetch start time.", !0)
                }); else if ("/viewers" === s)e.TwitchAPI.get("streams/" + e.getChannel()).done(function (e) {
                    c.serverMessage("Current Viewers: " + Twitch.display.commatize(e.stream.viewers), !0)
                }).fail(function () {
                    c.serverMessage("Could not fetch viewer count.", !0)
                }); else {
                    if ("/w" !== s || e.settings.get("disableWhispers") !== !0)return "/help" === s ? (c.serverMessage("BetterTTV Chat Commands:"), c.serverMessage("/b [username] -- Shortcut for /ban"), c.serverMessage("/chatters -- Tells you how many users are currently in chat"), c.serverMessage("/followers -- Retrieves the number of followers for the channel"), c.serverMessage("/join -- Joins the channel (deactivates anon chat mode)"), c.serverMessage("/linehistory on/off -- Toggles the chat field history (pressing up/down arrow in textbox)"), c.serverMessage("/localmod -- Turns on local mod-only mode (only your chat is mod-only mode)"), c.serverMessage("/localmodoff -- Turns off local mod-only mode"), c.serverMessage("/localsub -- Turns on local sub-only mode (only your chat is sub-only mode)"), c.serverMessage("/localsuboff -- Turns off local sub-only mode"), c.serverMessage("/massunban (or /unban all or /u all) -- Unbans all users in the channel (channel owner only)"), c.serverMessage("/part -- Parts the channel (activates anon chat mode)"), c.serverMessage("/purge [username] (or /p) -- Purges a user's chat"), c.serverMessage("/r -- Type '/r ' to respond to your last whisper"), c.serverMessage("/shrug -- Appends your chat line with a shrug face"), c.serverMessage("/sub -- Shortcut for /subscribers"), c.serverMessage("/suboff -- Shortcut for /subscribersoff"), c.serverMessage("/t [username] [time in seconds] -- Shortcut for /timeout"), c.serverMessage("/u [username] -- Shortcut for /unban"), c.serverMessage("/uptime -- Retrieves the amount of time the channel has been live"), c.serverMessage("/viewers -- Retrieves the number of viewers watching the channel"), c.serverMessage("Native Chat Commands:"), !1) : !1;
                    c.serverMessage("You have disabled whispers in BetterTTV settings")
                }
                return !0
            }, a.countUnreadMessages = function () {
                var t = e.getChatController(), n = d.getRooms(), a = 0;
                n.forEach(function (e) {
                    e = d.getRoom(e), e.unread > 0 && a++;
                    try {
                        e.emberRoom.set("unreadCount", e.unread)
                    } catch (t) {
                        s.log("Error setting unread count! Ember controller for channel must be removed.")
                    }
                }), t.set("notificationsCount", a)
            }, a.shiftQueue = function () {
                if (r() && r().get("id")) {
                    var t = r().get("id");
                    if (t !== i.currentRoom && r().get("name"))$(".ember-chat .chat-messages .tse-content .chat-line").remove(), i.currentRoom = t, i.__messageQueue = [], d.getRoom(t).playQueue(), c.serverMessage("You switched to: " + r().get("name").replace(/</g, "&lt;").replace(/>/g, "&gt;"), !0), r().tmiRoom.isGroupRoom ? $("#bttv-channel-state-contain").hide() : $("#bttv-channel-state-contain").show(); else {
                        if ("none" === $("#right_col").css("display"))return;
                        if (0 === i.__messageQueue.length)return;
                        i.__messageQueue.length > e.settings.get("scrollbackAmount") && i.__messageQueue.splice(0, i.__messageQueue.length - e.settings.get("scrollbackAmount")), i.__messageQueue.forEach(function (e) {
                            e.find("img").on("load", function () {
                                c.scrollChat()
                            })
                        }), $(".ember-chat .chat-messages .tse-content .chat-lines").append(i.__messageQueue), i.__messageQueue = []
                    }
                    c.scrollChat()
                }
            }, a.moderationCard = function (n, a) {
                var o = t("../features/make-card");
                e.TwitchAPI.get("channels/" + n.toLowerCase(), {}, {version: 3}).done(function (e) {
                    return e.name ? void o(e, a) : void o({name: e, display_name: e.capitalize()}, a)
                }).fail(function () {
                    o({name: n, display_name: n.capitalize()}, a)
                })
            }, a.labelsChanged = function (t) {
                if (e.settings.get("adminStaffAlert") === !0) {
                    var n = c.getSpecials(t);
                    -1 !== n.indexOf("admin") ? c.notifyMessage("admin", t + " just joined! Watch out foo!") : -1 !== n.indexOf("staff") && c.notifyMessage("staff", t + " just joined! Watch out foo!")
                }
            }, a.clearChat = function (t) {
                var n = i.trackTimeouts;
                if ($("#chat_preview").remove(), t) {
                    var a = [];
                    $('.chat-line[data-sender="' + t.replace(/%/g, "_").replace(/[<>,]/g, "") + '"]').each(function () {
                        a.push($(this))
                    });
                    var o = i.__messageQueue.filter(function (e) {
                        return e.data("sender") === t ? !0 : !1
                    });
                    if ($chatLines = $(a.concat(o)), !$chatLines.length)return;
                    if (e.settings.get("hideDeletedMessages") === !0)$chatLines.each(function () {
                        $(this).hide(), $("div.tipsy").remove()
                    }), setTimeout(function () {
                        $(".chat-line .mod-icons .bot, .chat-line .mod-icons .oldbot").each(function () {
                            $(this).parent().parent().find("span.message:contains('" + t.replace(/%/g, "_").replace(/[<>,]/g, "") + "')").each(function () {
                                $(this).parent().hide()
                            })
                        })
                    }, 3e3); else if ($chatLines.each(e.settings.get("showDeletedMessages") !== !0 ? function () {
                            var e = $(this).find(".message");
                            e.addClass("timed-out"), e.html('<span style="color: #999">&lt;message deleted&gt;</span>').off("click").on("click", function () {
                                $(this).replaceWith(l.message(t, decodeURIComponent($(this).data("raw"))))
                            })
                        } : function () {
                            var e = $(this).find(".message");
                            $("a", e).each(function () {
                                var e = '<span style="text-decoration: line-through;">' + $(this).attr("href").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</span>";
                                $(this).replaceWith(e)
                            }), $(".emoticon", e).each(function () {
                                $(this).css("opacity", "0.1")
                            }), e.addClass("timed-out"), e.html('<span style="color: #999">' + e.html() + "</span>")
                        }), n[t])n[t].count++, $("#times_from_" + t.replace(/%/g, "_").replace(/[<>,]/g, "") + "_" + n[t].timesID).each(function () {
                        $(this).text("(" + n[t].count + " times)")
                    }); else {
                        n[t] = {count: 1, timesID: Math.floor(100001 * Math.random())};
                        var s = c.lookupDisplayName(t);
                        c.serverMessage(s + ' has been timed out. <span id="times_from_' + t.replace(/%/g, "_").replace(/[<>,]/g, "") + "_" + n[t].timesID + '"></span>', !0)
                    }
                } else c.serverMessage("Chat was cleared by a moderator (Prevented by BetterTTV)", !0)
            }, a.notice = function (e) {
                var t = e.msgId, n = e.message;
                g({type: "notice", tags: {"msg-id": t}, message: n}), c.serverMessage(n, !0)
            };
            var v = a.privmsg = function (n, a) {
                var d;
                a.tags && a.tags["display-name"] && (i.displayNames[a.from] = a.tags["display-name"]);
                try {
                    r().trackLatency(a)
                } catch (g) {
                    s.log("Error sending tracking data to Twitch")
                }
                if (":act " !== a.message.substr(0, 5) && (!a.style || -1 !== ["admin", "action", "notification", "whisper"].indexOf(a.style))) {
                    if ("admin" === a.style || "notification" === a.style)return a.message.indexOf("Sorry, we were unable to connect to chat.") > -1 && i.ignoreDC === !0 ? void(i.ignoreDC = !1) : (a.style = "admin", d = l.privmsg(!1, "action" === a.style ? !0 : !1, "admin" === a.style ? !0 : !1, o.userData.isLoggedIn ? c.isModerator(o.userData.name) : !1, {
                        message: a.message,
                        time: null === a.date ? "" : a.date.toLocaleTimeString().replace(/^(\d{0,2}):(\d{0,2}):(.*)$/i, "$1:$2"),
                        nickname: a.from || "jtv",
                        sender: a.from,
                        badges: a.badges || ("twitchnotify" === a.from ? [{
                            type: "subscriber",
                            name: "",
                            description: "Channel Subscriber"
                        }] : []),
                        color: "#555"
                    }), $(".ember-chat .chat-messages .tse-content .chat-lines").append(d), void c.scrollChat());
                    i.chatters[a.from] || (i.chatters[a.from] = {lastWhisper: 0}), i.trackTimeouts[a.from] && delete i.trackTimeouts[a.from];
                    var p = t("../features/keywords-lists").blacklistFilter, f = t("../features/keywords-lists").highlighting;
                    if (!e.settings.get("blacklistKeywords") || !p(a)) {
                        var v = e.settings.get("highlightKeywords") && f(a);
                        if (v && h(a), u(a), a.color = a.tags && a.tags.color && a.tags.color.length ? a.tags.color : c.getColor(a.from), a.color = c.calculateColor(a.color), c.hasGlow(a.from) && "action" !== a.style) {
                            var b = m("#ffffff" === a.color ? "#000000" : a.color);
                            e.settings.get("darkenedMode") === !0 && (a.color = a.color + "; text-shadow: 0 0 20px rgba(" + b.r + "," + b.g + "," + b.b + ",0.8)")
                        }
                        o.blackChat && "#000000" === a.color && (a.color = "#ffffff");
                        var y = c.getBadges(a.from), w = c.assignBadges(y, a), _ = a.from, C = a.from;
                        if (a.bttvDisplayName ? (c.lookupDisplayName(a.from), _ = a.bttvDisplayName) : _ = c.lookupDisplayName(a.from), "whisper" === a.style) {
                            var k = c.getColor(a.to);
                            return k = c.calculateColor(k), d = l.whisper({
                                message: a.message,
                                time: null === a.date ? "" : a.date.toLocaleTimeString().replace(/^(\d{0,2}):(\d{0,2}):(.*)$/i, "$1:$2"),
                                from: _,
                                sender: C,
                                receiver: a.to,
                                to: c.lookupDisplayName(a.to),
                                fromColor: a.color,
                                toColor: k,
                                emotes: a.tags.emotes
                            }), $(".ember-chat .chat-messages .tse-content .chat-lines").append(d), void c.scrollChat()
                        }
                        (!o.localSubsOnly || c.isModerator(a.from) || c.isSubscriber(a.from)) && (!o.localModsOnly || c.isModerator(a.from)) && (d = l.privmsg(v, "action" === a.style ? !0 : !1, "admin" === a.style ? !0 : !1, o.userData.isLoggedIn ? c.isModerator(o.userData.name) && (!c.isModerator(C) || o.userData.name === n && o.userData.name !== C) : !1, {
                            message: a.message,
                            time: a.date.toLocaleTimeString().replace(/^(\d{0,2}):(\d{0,2}):(.*)$/i, "$1:$2"),
                            nickname: _,
                            sender: C,
                            badges: w,
                            color: a.color,
                            emotes: a.tags.emotes
                        }), i.__messageQueue.push($(d)))
                    }
                }
            };
            a.onPrivmsg = function (t, n) {
                if (!d.getRoom(t).active() && n.from && "jtv" !== n.from)return void d.getRoom(t).queueMessage(n);
                if (n.message && n.message.length && r() && r().tmiRoom)try {
                    if ("whisper" === n.style) {
                        if (i.chatters[n.from] = {lastWhisper: Date.now()}, e.settings.get("disableWhispers") === !0)return;
                        n.from !== o.userData.name && (p(), e.settings.get("desktopNotifications") === !0 && e.chat.store.activeView === !1 && e.notify("You received a whisper from " + (n.tags && n.tags["display-name"] || n.from)))
                    }
                    v(t, n)
                } catch (a) {
                    if (-1 !== i.__reportedErrors.indexOf(a.message))return;
                    i.__reportedErrors.push(a.message), console.log(a);
                    var s = {stack: a.stack, message: a.message};
                    $.get("https://nightdev.com/betterttv/errors/?obj=" + encodeURIComponent(JSON.stringify(s))), c.serverMessage("BetterTTV encountered an error reading chat. The developer has been sent a log of this action. Please try clearing your cookies and cache.")
                }
            }
        }, {
            "../features/audible-feedback": 14,
            "../features/channel-state": 19,
            "../features/embedded-polling": 32,
            "../features/keywords-lists": 41,
            "../features/make-card": 42,
            "../features/pinned-highlights": 44,
            "../helpers/colors": 46,
            "../helpers/debug": 47,
            "../vars": 68,
            "./helpers": 5,
            "./rooms": 7,
            "./store": 8,
            "./templates": 10,
            "./tmi": 11
        }],
        5: [function (t, n, a) {
            var o = t("../vars"), s = t("../helpers/debug"), i = t("../keycodes"), r = t("./tmi"), c = t("./store"), l = t("./templates"), d = t("../bots"), h = t("punycode"), u = t("../features/channel-state"), g = t("../helpers/massunban-popup"), p = t("lodash.throttle"), m = t("../helpers/colors").calculateColorBackground, f = t("../helpers/colors").calculateColorReplacement, v = a.lookupDisplayName = function (t, n) {
                return t ? (o.userData.isLoggedIn && t === o.userData.name && (c.displayNames[t] = o.userData.displayName || t), n !== !1 && (n = e.storage.getObject("nicknames"), t in n) ? n[t] || t.capitalize() : r() ? c.displayNames.hasOwnProperty(t) ? c.displayNames[t] || t.capitalize() : "jtv" !== t && "twitchnotify" !== t ? t.capitalize() : t : t.capitalize()) : ""
            }, b = ["mod", "unmod", "ban", "unban", "timeout", "purge", "host", "unhost", "b", "t", "u", "w", "p"], y = function (e) {
                if (e = e.split(" "), e.length < 2)return !1;
                e.pop();
                var t = e[e.length - 1];
                if (e[0] !== t)return !1;
                for (var n = 0; n < b.length; n++) {
                    var a = new RegExp("^(\\/|\\.)" + b[n] + "$", "i");
                    if (a.test(t))return !0
                }
                return !1
            };
            a.parseTags = function (e) {
                var t = e.slice(1, e.length).split(";");
                e = {};
                for (var n = 0; n < t.length; n++) {
                    var a = t[n], o = a.split("=");
                    e[o[0]] = o[1]
                }
                return e
            }, a.parseRoomState = function (e) {
                try {
                    u({type: "roomstate", tags: e.tags})
                } catch (t) {
                    s.log("Couldn't handle roomstate update.", t)
                }
            };
            var w = function () {
                var t = [];
                e.chat.emotes().forEach(function (e) {
                    e.text && t.push(e.text)
                });
                try {
                    var n = r().tmiSession._emotesParser.emoticonRegexToIds;
                    for (var a in n)n.hasOwnProperty(a) && n[a].isRegex !== !0 && t.push(a)
                } catch (o) {
                    s.log("Couldn't grab user emotes for tab completion.", o)
                }
                return t.sort()
            }, _ = a.suggestions = function (t, n) {
                var a = $(".ember-chat .chat-interface"), o = a.find("textarea"), s = a.find(".suggestions");
                s.length && s.remove();
                var i = o.val(), r = i.trim().split(" "), c = r.pop();
                ("@" === c.charAt(0) || y(i) || e.settings.get("tabCompletionTooltip") !== !1) && (s = a.find(".textarea-contain").append(l.suggestions(t, n)).find(".suggestions"), s.find(".suggestion").on("click", function () {
                    var e = $(this).text();
                    r = o.val().trim().split(" "), c = y(i) && !r[1] ? "" : r.pop();
                    var t = -1 !== w().indexOf(e);
                    r.push(t ? e : "@" === c.charAt(0) ? "@" + v(e, !1) : v(e, !1)), o.val(1 !== r.length || t ? r.join(" ") + " " : r.join(" ") + ", "), s.remove()
                }).on("mouseover", function () {
                    var e = s.find(".suggestion").eq(0);
                    e.parent().removeClass("highlighted"), $(this).parent().addClass("highlighted")
                }).on("mouseout", function () {
                    $(this).parent().removeClass("highlighted")
                }), s.on("click", function () {
                    $(this).remove()
                }))
            };
            a.tabCompletion = function (e) {
                var t = e.keyCode || e.which, n = $(".ember-chat .chat-interface"), a = n.find("textarea"), s = a.val(), r = s.trim().split(" "), l = r.pop().replace(/,$/, ""), d = w();
                if (-1 === d.indexOf(l) && (l = l.toLowerCase()), (y(s) || t === i.Tab || "@" === l.charAt(0)) && t !== i.Enter) {
                    var h, u = c.suggestions, g = l.replace(/^@/, ""), p = u.matchList.indexOf(g);
                    if (g === u.lastMatch && p > -1) {
                        var m, f;
                        m = p + 1 < u.matchList.length ? p + 1 : u.matchList.length - 1, f = p - 1 >= 0 ? p - 1 : 0;
                        var b = e.shiftKey ? f : m;
                        if (h = u.matchList[b], u.matchList.length < 6)_(u.matchList, b); else {
                            var C;
                            0 > b - 2 ? C = 0 : b + 2 > u.matchList.length - 1 ? (C = u.matchList.length - 5, b = b === u.matchList.length - 1 ? 4 : 3) : (C = b - 2, b = 2), _(u.matchList.slice(C, C + 5), b)
                        }
                    } else {
                        var k = g, x = Object.keys(c.chatters), T = [];
                        if (y(s)) {
                            for (var S = x.length; S >= 0; S--)void 0 !== c.chatters[x[S]] && 0 !== c.chatters[x[S]].lastWhisper && (T.push(x[S]), x.splice(S, 1));
                            T.sort(function (e, t) {
                                return c.chatters[t].lastWhisper - c.chatters[e].lastWhisper
                            })
                        }
                        if (x.sort(), x = T.concat(x), "@" === l.charAt(0) || y(s) || (x = x.concat(d)), x.indexOf(o.userData.name) > -1 && x.splice(x.indexOf(o.userData.name), 1), /^(\/|\.)/.test(k) && (k = ""), k.length && (x = x.filter(function (e) {
                                var t = e.toLowerCase();
                                return 0 === t.indexOf(k)
                            })), !x.length)return;
                        u.matchList = x, _(x.slice(0, 5), 0), h = x[0]
                    }
                    var M = n.find(".suggestions");
                    if (setTimeout(function () {
                            M.remove()
                        }, 1e4), t !== i.Tab)return;
                    u.lastMatch = h;
                    var L = !0;
                    if (-1 === d.indexOf(h) && (h = v(h, !1), L = !1), /^(\/|\.)/.test(l))return h = l + " " + h, void a.val(h);
                    "@" === l.charAt(0) && (h = "@" + h), r.push(h), a.val(1 !== r.length || L ? r.join(" ") : r.join(" ") + ", ")
                }
            };
            var C = a.serverMessage = function (e, n) {
                var a = t("./handlers");
                a.onPrivmsg(c.currentRoom, {from: "jtv", date: n ? new Date : null, message: e, style: "admin"})
            };
            a.whisperReply = function () {
                var t = $(".ember-chat .chat-interface").find("textarea");
                if ("/r " === t.val() && e.settings.get("disableWhispers") === !1) {
                    var n = ($.grep(c.__rooms[c.currentRoom].messages, function (e) {
                        return "whisper" === e.style && e.from.toLowerCase() !== o.userData.name
                    }).pop() || {from: null}).from;
                    n ? t.val("/w " + n + " ") : (t.val(""), C("You have not received any whispers", !0))
                }
            }, a.chatLineHistory = function (t, n) {
                if (e.settings.get("chatLineHistory") !== !1) {
                    var a = n.keyCode || n.which, o = c.chatHistory.indexOf(t.val().trim());
                    a === i.UpArrow ? o >= 0 ? c.chatHistory[o + 1] && t.val(c.chatHistory[o + 1]) : t.val().trim().length ? (c.chatHistory.unshift(t.val().trim()), t.val(c.chatHistory[1])) : t.val(c.chatHistory[0]) : a === i.DownArrow && o >= 0 && t.val(c.chatHistory[o - 1] ? c.chatHistory[o - 1] : "")
                }
            }, a.notifyMessage = function (n, a) {
                var o = t("./handlers"), s = e.settings.get("showJTVTags") === !0 && -1 !== ["moderator", "broadcaster", "admin", "global-moderator", "staff", "bot"].indexOf(n) ? "old" + n : n;
                o.onPrivmsg(c.currentRoom, {
                    from: "twitchnotify",
                    date: new Date,
                    badges: [{
                        type: s,
                        name: e.settings.get("showJTVTags") && "subscriber" !== n && "turbo" !== n ? n.capitalize() : "",
                        description: s.capitalize()
                    }],
                    message: a,
                    style: "notification"
                })
            }, a.sendMessage = function (t) {
                if (t && "" !== t && r()) {
                    if (!o.userData.isLoggedIn) {
                        try {
                            window.Ember.$.login()
                        } catch (n) {
                            C("You must be logged into Twitch to send messages.")
                        }
                        return
                    }
                    if (["/", "."].indexOf(t.charAt(0)) > -1 && (t = t.split(" "), t[0] = t[0].toLowerCase(), t = t.join(" ")), r().tmiSession.sendWhisper && ["/w", ".w"].indexOf(t.substr(0, 2)) > -1) {
                        var a = t.split(" ");
                        return a.shift(), void r().tmiSession.sendWhisper(a.shift(), a.join(" "))
                    }
                    if (e.settings.get("anonChat") === !0)return void C("You can't send messages when Anon Chat is enabled. You can disable Anon Chat in the BetterTTV settings.");
                    r().tmiRoom.sendMessage(t);
                    try {
                        /^\/w(\s|$)/.test(t) || (-1 === ["/", "."].indexOf(t.charAt(0)) && u({type: "outgoing_message"}), e.ws.broadcastMe(), r().trackSubOnly(t), r().trackChat())
                    } catch (n) {
                        s.log("Error sending tracking data to Twitch")
                    }
                    r().set("messageToSend", ""), r().set("savedInput", "")
                }
            }, a.reparseMessages = function (t) {
                t && t.length && e.jQuery('.chat-line[data-sender="' + t + '"] .message').each(function () {
                    var e = $(this);
                    if (!e.hasClass("timed-out")) {
                        var n = decodeURIComponent(e.data("raw")), a = e.data("emotes") ? JSON.parse(decodeURIComponent(e.data("emotes"))) : !1, o = e.attr("style") ? e.attr("style").split(": ")[1] : !1;
                        e.replaceWith(l.message(t, n, a, o))
                    }
                })
            }, a.listMods = function () {
                return r() ? r().tmiRoom._roomUserLabels._sets : {}
            }, a.addMod = function (e) {
                return e && "" !== e ? void(r() && r().tmiRoom._roomUserLabels.add(e, "mod")) : !1
            }, a.removeMod = function (e) {
                return e && "" !== e ? void(r() && r().tmiRoom._roomUserLabels.remove(e, "mod")) : !1
            }, a.isIgnored = function (e) {
                return e && "" !== e ? r() && r().tmiSession.isIgnored(e) : !1
            };
            var k = a.isOwner = function (e) {
                return e && "" !== e ? r() && -1 !== r().tmiRoom.getLabels(e).indexOf("owner") : !1
            }, x = a.isAdmin = function (e) {
                return e && "" !== e ? r() && -1 !== r().tmiRoom.getLabels(e).indexOf("admin") : !1
            }, T = a.isGlobalMod = function (e) {
                return e && "" !== e ? r() && -1 !== r().tmiRoom.getLabels(e).indexOf("global_mod") : !1
            }, S = a.isStaff = function (e) {
                return e && "" !== e ? r() && -1 !== r().tmiRoom.getLabels(e).indexOf("staff") : !1
            }, M = a.isModerator = function (e) {
                return e && "" !== e ? r() && (-1 !== r().tmiRoom.getLabels(e).indexOf("mod") || x(e) || S(e) || k(e) || T(e)) : !1
            };
            a.isTurbo = function (e) {
                return e && "" !== e ? r() && -1 !== r().tmiRoom.getLabels(e).indexOf("turbo") : !1
            }, a.isSubscriber = function (e) {
                return e && "" !== e ? r() && -1 !== r().tmiRoom.getLabels(e).indexOf("subscriber") : !1
            }, a.isSpammer = function (e) {
                return e && "" !== e ? c.spammers.indexOf(e.toLowerCase()) > -1 : !1
            }, a.getBadges = function (t) {
                if (!t || "" === t)return !1;
                var n = [];
                return r() && r().tmiRoom.getLabels(t) && (n = r().tmiRoom.getLabels(t)), c.__subscriptions[t] && -1 !== c.__subscriptions[t].indexOf(e.getChannel()) && n.push("subscriber"), (c.__channelBots.indexOf(t) > -1 || d.indexOf(t) > -1 && M(t)) && n.push("bot"), n
            }, a.hasGlow = function (e) {
                return e && "" !== e ? c.__subscriptions[e] && -1 !== c.__subscriptions[e].indexOf("_glow") ? !0 : void 0 : !1
            }, a.getColor = function (e) {
                return e && "" !== e ? r() ? r().tmiSession.getColor(e) : null : !1
            }, a.getEmotes = function (e) {
                if (!e || "" === e)return !1;
                var t = [];
                return r() && r().tmiRoom.getEmotes && r().tmiRoom.getEmotes(e) && (t = r().tmiRoom.getEmotes(e)), c.__subscriptions[e] && c.__subscriptions[e].forEach(function (e) {
                    t.push(e)
                }), t
            }, a.getSpecials = function (t) {
                if (!t || "" === t)return !1;
                var n = [];
                return r() && r().tmiSession && r().tmiSession._users && (n = r().tmiSession._users.getSpecials(t)), c.__subscriptions[t] && -1 !== c.__subscriptions[t].indexOf(e.getChannel()) && n.push("subscriber"), n
            }, a.scrollChat = p(function () {
                var t = $(".ember-chat"), n = t.find(".chat-interface").children("span").children(".more-messages-indicator").length;
                if (!n && t.length) {
                    var a = t.find(".chat-messages"), o = a.children(".tse-scroll-content"), s = o.find(".chat-lines").children("div.chat-line");
                    setTimeout(function () {
                        o.length && (o[0].scrollTop = o[0].scrollHeight)
                    });
                    var i = s.length - e.settings.get("scrollbackAmount");
                    0 >= i || s.slice(0, i).each(function () {
                        $(this).remove()
                    })
                }
            }, 250), a.calculateColor = function (t) {
                var n = /^#[0-9a-f]+$/i;
                if (n.test(t))for (; "light" === m(t) && e.settings.get("darkenedMode") === !0 || "dark" === m(t) && e.settings.get("darkenedMode") !== !0;)t = f(t, m(t));
                return t
            };
            var L = function (e, t) {
                var n = t;
                for (var a in e)e.hasOwnProperty(a) && t > a && n++;
                return n
            };
            a.handleSurrogatePairs = function (e, t) {
                var n, a = h.ucs2.decode(e), o = {};
                for (n = 0; n < a.length; n++)a[n] <= 65535 || (o[n] = !0);
                for (var s in t)if (t.hasOwnProperty(s)) {
                    var i = t[s];
                    for (n = i.length - 1; n >= 0; n--)for (var r = 0; r < i[n].length; r++)i[n][r] = L(o, i[n][r])
                }
                return t
            }, a.loadBadges = function () {
                $("#bttv_volunteer_badges").length || $.getJSON("https://api.betterttv.net/2/badges").done(function (e) {
                    var t = $("<style />");
                    t.attr("id", "bttv_volunteer_badges"), e.types.forEach(function (e) {
                        t.append(".badges .bttv-" + e.name + ' { background: url("' + e.svg + '"); background-size: 100%; }'), c.__badgeTypes[e.name] = e
                    }), t.appendTo("head"), e.badges.forEach(function (e) {
                        c.__badges[e.name] = e.type
                    })
                })
            }, a.assignBadges = function (n, a) {
                a = a || {};
                var o = [], s = t("../legacy-tags")(a);
                if (-1 !== n.indexOf("staff") ? o.push({
                        type: "staff",
                        name: "Staff",
                        description: "Twitch Staff"
                    }) : -1 !== n.indexOf("admin") ? o.push({
                        type: "admin",
                        name: "Admin",
                        description: "Twitch Admin"
                    }) : -1 !== n.indexOf("global_mod") ? o.push({
                        type: "global-moderator",
                        name: "GMod",
                        description: "Twitch Global Moderator"
                    }) : -1 !== n.indexOf("bot") ? o.push({
                        type: "bot",
                        name: "Bot",
                        description: "Channel Bot"
                    }) : -1 === n.indexOf("owner") || s[a.from] ? -1 === n.indexOf("mod") || s[a.from] || o.push({
                        type: "moderator",
                        name: "Mod",
                        description: "Channel Moderator"
                    }) : o.push({
                        type: "broadcaster",
                        name: "Host",
                        description: "Channel Broadcaster"
                    }), s[a.from] && (s[a.from].mod === !0 && M(a.from) || s[a.from].mod === !1)) {
                    var i = s[a.from];
                    i.color && "action" !== a.style && (a.color = i.color), i.nickname && (a.bttvDisplayName = i.nickname), o.unshift({
                        type: i.tagType,
                        name: i.tagName,
                        description: "Grandfathered BetterTTV Swag Tag"
                    })
                }
                if (a.from in c.__badges) {
                    var r = c.__badges[a.from];
                    o.push({type: "bttv-" + r, name: "", description: c.__badgeTypes[r].description})
                }
                return -1 !== n.indexOf("turbo") && o.push({
                    type: "turbo",
                    name: "",
                    description: "Twitch Turbo"
                }), -1 !== n.indexOf("subscriber") && o.push({
                    type: "subscriber",
                    name: "",
                    description: "Channel Subscriber"
                }), o.forEach(function (t) {
                    return e.settings.get("showJTVTags") === !1 && "Grandfathered BetterTTV Swag Tag" !== t.description ? void(t.name = "") : void(-1 !== ["moderator", "broadcaster", "admin", "global-moderator", "staff", "bot"].indexOf(t.type) && (t.type = "old" + t.type))
                }), o
            }, a.ban = function (e) {
                return e && "" !== e ? r() && r().tmiRoom ? r().tmiRoom.banUser(e) : null : !1
            }, a.timeout = function (e, t) {
                return t = t || 600, e && "" !== e ? r() && r().tmiRoom ? r().tmiRoom.timeoutUser(e + " " + t) : null : !1
            };
            var A = a.unban = function (e) {
                return e && "" !== e ? r() && r().tmiRoom ? r().tmiRoom.unbanUser(e) : null : !1
            };
            a.massUnban = function () {
                if (!o.userData.isLoggedIn || o.userData.name !== e.getChannel())return void C("You're not the channel owner.");
                var t = new g, n = 0, a = function (e, t) {
                    var n = setInterval(function () {
                        var a = e.shift();
                        return a ? void A(a) : (clearInterval(n), void t())
                    }, 333)
                }, s = function () {
                    C("Fetching banned users..."), t.getNextBatch(function (e) {
                        return 0 === e.length ? (C("You have no more banned users. Total Unbanned Users: " + n), void t.done()) : (n += e.length, C("Starting purge process in 5 seconds."), C("This block of users will take " + (e.length / 3).toFixed(1) + " seconds to unban."), e.length > 70 && C("Twitch only provides up to 100 users at a time (some repeat), but this script will cycle through all of the blocks of users."), void setTimeout(function () {
                            a(e, function () {
                                C("This block of users has been purged. Checking for more.."), s()
                            })
                        }, 5e3))
                    })
                };
                s()
            }, a.translate = function (e, t, n) {
                var a = window.cookie && window.cookie.get("language") ? window.cookie.get("language") : "en", o = $.param({
                    target: a,
                    q: n
                });
                $.getJSON("https://api.betterttv.net/2/translate?" + o).success(function (n) {
                    e.replaceWith(l.message(t, n.translation))
                }).error(function (a) {
                    $newElement = $(l.message(t, n)), e.replaceWith($newElement);
                    var o = "There was an unknown error translating this message.";
                    a.responseJSON && a.responseJSON.message && (o = a.responseJSON.message), $newElement.tipsy({
                        trigger: "manual",
                        gravity: $.fn.tipsy.autoNS,
                        title: function () {
                            return o
                        }
                    }), $newElement.tipsy("show"), setTimeout(function () {
                        try {
                            $newElement.tipsy("hide")
                        } catch (e) {
                        }
                    }, 3e3)
                })
            }
        }, {
            "../bots": 1,
            "../features/channel-state": 19,
            "../helpers/colors": 46,
            "../helpers/debug": 47,
            "../helpers/massunban-popup": 50,
            "../keycodes": 52,
            "../legacy-tags": 53,
            "../vars": 68,
            "./handlers": 4,
            "./store": 8,
            "./templates": 10,
            "./tmi": 11,
            "lodash.throttle": 73,
            punycode: 72
        }],
        6: [function (e, t) {
            t.exports = function (e) {
                return '<a href="' + e + '" class="chat-preview" target="_blank">' + e + "</a>"
            }
        }, {}],
        7: [function (t, n, a) {
            var o = t("./tmi"), s = t("./store"), i = a.newRoom = function (n) {
                var a, o = t("./handlers"), i = null, c = e.getChatController().get("connectedPrivateGroupRooms"), l = e.getChatController().get("currentChannelRoom");
                if (l.get("id") === n)i = l; else for (a = 0; a < c.length; a++)if (c[a].get("id") === n) {
                    i = c[a];
                    break
                }
                s.__rooms[n] = {
                    name: n, unread: 0, emberRoom: i, active: function () {
                        return e.getChatController() && e.getChatController().currentRoom && e.getChatController().currentRoom.get("id") === n ? !0 : !1
                    }, messages: [], playQueue: function () {
                        for (s.__rooms[n].unread = 0, o.countUnreadMessages(), a = 0; a < s.__rooms[n].messages.length; a++) {
                            var e = s.__rooms[n].messages[a];
                            o.onPrivmsg(n, e)
                        }
                    }, queueMessage: function (t) {
                        s.__rooms[n].messages.length > e.settings.get("scrollbackAmount") && s.__rooms[n].messages.shift(), s.__rooms[n].messages.push(t)
                    }, chatHandler: function (e) {
                        e.from && "jtv" !== e.from && r(n).queueMessage(e), r(n).active() ? o.onPrivmsg(n, e) : (s.__rooms[n].unread++, o.countUnreadMessages())
                    }
                }
            }, r = a.getRoom = function (e) {
                if (!s.__rooms[e]) {
                    var n = t("./handlers");
                    i(e), o().tmiRoom && (delete o().tmiRoom._events.message, delete o().tmiRoom._events.clearchat, o().tmiRoom.on("message", r(e).chatHandler), o().tmiRoom.on("clearchat", n.clearChat))
                }
                return s.__rooms[e]
            };
            a.getRooms = function () {
                return Object.keys(s.__rooms)
            }
        }, {"./handlers": 4, "./store": 8, "./tmi": 11}],
        8: [function (e, t, n) {
            n.__rooms = {}, n.__messageQueue = [], n.__reportedErrors = [], n.__subscriptions = {}, n.__unbannedUsers = [], n.__channelBots = [], n.__badgeTypes = {}, n.__badges = {}, n.displayNames = {}, n.trackTimeouts = {}, n.chatters = {}, n.spammers = [], n.tabCompleteHistory = [], n.suggestions = {
                matchList: [],
                lastMatch: ""
            }, n.chatHistory = [], n.whisperHistory = {}, n.bttvEmotes = {}, n.autoCompleteEmotes = {}, n.__messageTimer = !1, n.currentRoom = "", n.activeView = !0
        }, {}],
        9: [function (t, n) {
            var a = t("../vars"), o = t("../helpers/debug"), s = t("../keycodes"), i = t("./store"), r = t("./handlers"), c = t("./helpers"), l = t("./rooms"), d = t("./templates"), h = t("../features/override-emotes"), u = t("../features/chat-load-settings"), g = t("../features/anon-chat"), p = t("../features/custom-timeouts"), m = n.exports = function () {
                var n, f = t("./tmi")();
                if (g(), e.settings.get("disableUsernameColors") === !0 ? $(".ember-chat .chat-room").addClass("no-name-colors") : $(".ember-chat .chat-room").removeClass("no-name-colors"), $(".ember-chat .chat-header:first").hasClass("main-header") || $(".ember-chat .chat-header:first").addClass("main-header"), !i.isLoaded) {
                    if (e.getChatController().set("showList", !1), f.get("isLoading"))return o.log("chat is still loading"), void setTimeout(function () {
                        m()
                    }, 1e3);
                    var v = e.storage.getObject("chatSettings");
                    "undefined" == typeof v.showModIcons && (v.showModIcons = !0, $(".ember-chat .chat-messages").removeClass("hideModIcons"), e.storage.putObject("chatSettings", v)), "undefined" == typeof v.showTimestamps && (v.showTimestamps = !0, $(".ember-chat .chat-messages").removeClass("hideTimestamps"), e.storage.putObject("chatSettings", v)), v.darkMode === !0 && (v.darkMode = !1, $(".chat-container").removeClass("dark"), e.storage.putObject("chatSettings", v), e.settings.save("darkenedMode", !0)), i.isLoaded = !0, o.log("Loading chat listeners");
                    for (n in f.tmiSession._rooms)f.tmiSession._rooms.hasOwnProperty(n) && (delete f.tmiSession._rooms[n]._events.message, delete f.tmiSession._rooms[n]._events.clearchat, delete f.tmiSession._rooms[n]._events.notice);
                    l.newRoom(e.getChannel()), f.tmiRoom.on("message", l.getRoom(e.getChannel()).chatHandler), f.tmiRoom.on("clearchat", r.clearChat), f.tmiRoom.on("notice", r.notice), f.tmiRoom.on("roomstate", c.parseRoomState), f.channel && f.set("name", f.channel.get("display_name")), i.currentRoom = e.getChannel();
                    var b = !1;
                    try {
                        b = App.__container__.lookup("route:application").controller.get("isConversationsEnabled")
                    } catch (y) {
                    }
                    (!b || f.get("isEmbedChat")) && (delete f.tmiSession._events.whisper, f.tmiSession.on("whisper", l.getRoom(e.getChannel()).chatHandler)), c.parseRoomState({
                        tags: {
                            "subs-only": f.get("subsOnly"),
                            slow: f.get("slow"),
                            r9k: f.get("r9k")
                        }
                    }), a.localSubsOnly = !1, a.localModsOnly = !1;
                    var w = e.getChatController().get("connectedPrivateGroupRooms");
                    w && w.length > 0 && w.forEach(function (e) {
                        l.newRoom(e.get("id")), e.tmiRoom.on("message", l.getRoom(e.get("id")).chatHandler), e.tmiRoom.on("clearchat", r.clearChat)
                    }), h();
                    var _, C = Object.keys(i.bttvEmotes);
                    for (_ = C.length - 1; _ >= 0; _--) {
                        var k = C[_];
                        i.bttvEmotes[k].channelEmote && delete i.bttvEmotes[k]
                    }
                    i.__channelBots = [], $.getJSON("https://api.betterttv.net/2/channels/" + e.getChannel()).done(function (e) {
                        e.emotes.forEach(function (t) {
                            t.channelEmote = !0, t.urlTemplate = e.urlTemplate.replace("{{id}}", t.id), t.url = t.urlTemplate.replace("{{image}}", "1x"), i.bttvEmotes[t.code] = t
                        }), i.__channelBots = e.bots
                    }), c.loadBadges(), e.ws.broadcastMe(), u(), $.getJSON("https://api.betterttv.net/2/spammers").done(function (e) {
                        i.spammers = e.users
                    }), $("body").off("click", ".chat-line .message.spam").on("click", ".chat-line .message.spam", function () {
                        var e = $(this).parent().data("sender");
                        $(this).replaceWith(d.message(e, decodeURIComponent($(this).data("raw")), null, null, !0))
                    }), $("body").off("mouseover", ".chat-line .message a").on("mouseover", ".chat-line .message a", function () {
                        var e = $(this), t = encodeURIComponent(e.attr("href"));
                        $.getJSON("https://api.betterttv.net/2/link_resolver/" + t).done(function (t) {
                            t.tooltip && e.is(":hover") && (e.tipsy({
                                trigger: "manual",
                                gravity: $.fn.tipsy.autoNS,
                                html: !0,
                                title: function () {
                                    return t.tooltip
                                }
                            }), e.tipsy("show"))
                        })
                    }).off("mouseout", ".chat-line .message a").on("mouseout", ".chat-line .message a", function () {
                        $(this).tipsy("hide"), $("div.tipsy").remove()
                    }), $("body").off("mouseover", ".chat-line .badges .badge, .chat-line .mod-icons a").on("mouseover", ".chat-line .badges .badge, .chat-line .mod-icons a", function () {
                        $(this).tipsy({trigger: "manual", gravity: "sw"}), $(this).tipsy("show")
                    }).off("mouseout", ".chat-line .badges .badge, .chat-line .mod-icons a").on("mouseout", ".chat-line .badges .badge, .chat-line .mod-icons a", function () {
                        $(this).tipsy("hide"), $("div.tipsy").remove()
                    }), $("body").off("mouseover", ".bttv-mod-card button").on("mouseover", ".bttv-mod-card button", function () {
                        $(this).tipsy({trigger: "manual", gravity: "s"}), $(this).tipsy("show")
                    }).off("mouseout", ".bttv-mod-card button").on("mouseout", ".bttv-mod-card button", function () {
                        $(this).tipsy("hide"), $("div.tipsy").remove()
                    }), $("body").off("click", ".chat-line .mod-icons .timeout").on("click", ".chat-line .mod-icons .timeout", function () {
                        c.timeout($(this).parents(".chat-line").data("sender")), $(this).parent().children(".ban").hide(), $(this).parent().children(".unban").show()
                    }).off("click", ".chat-line .mod-icons .ban").on("click", ".chat-line .mod-icons .ban", function () {
                        c.ban($(this).parents(".chat-line").data("sender")), $(this).parent().children(".ban").hide(), $(this).parent().children(".unban").show()
                    }).off("click", ".chat-line .mod-icons .unban").on("click", ".chat-line .mod-icons .unban", function () {
                        c.unban($(this).parents(".chat-line").data("sender")), $(this).parent().children(".ban").show(), $(this).parent().children(".unban").hide()
                    }).off("click", ".chat-line .badges .turbo, .chat-line .badges .subscriber").on("click", ".chat-line .badges .turbo, .chat-line .badges .subscriber", function () {
                        $(this).hasClass("turbo") ? window.open("/products/turbo?ref=chat_badge", "_blank") : $(this).hasClass("subscriber") && window.open(Twitch.url.subscribe(e.getChannel(), "in_chat_subscriber_link"), "_blank")
                    });
                    var x = 0;
                    if ($("body").off("click", ".chat-line .from").on("click", ".chat-line .from", function (t) {
                            if (!t.shiftKey) {
                                var n = $(this), a = (n.data("sender") || n.parent().data("sender")).toString();
                                if (x > 0)return x++;
                                setTimeout(function () {
                                    x >= 2 && e.settings.get("dblClickAutoComplete") === !0 ? $(".ember-chat .chat-interface").find("textarea").val(c.lookupDisplayName(a, !1) + ", ") : r.moderationCard(a, n), x = 0
                                }, 250), x++
                            }
                        }).on("mousedown", ".chat-line .from", function (t) {
                            (3 === t.which && !e.settings.get("customTOShiftOnly") || t.shiftKey) && p($(this).data("sender") || $(this).parent().data("sender"), $(this))
                        }).on("contextmenu", ".chat-line .from", function (t) {
                            return c.isModerator(a.userData.name) ? e.settings.get("customTOShiftOnly") && !t.shiftKey ? !0 : !1 : !0
                        }), e.TwitchEmoteSets && f.product && f.product.emoticons)for (_ = 0; _ < f.product.emoticons.length; _++) {
                        var T = f.product.emoticons[_];
                        if (T.state && "active" === T.state && !e.TwitchEmoteSets[T.emoticon_set]) {
                            n = e.getChannel(), $.post("https://api.betterttv.net/2/emotes/channel_tip/" + encodeURIComponent(n)).done(function () {
                                o.log("Gave an emote tip about " + n)
                            }).fail(function () {
                                o.log("Error giving an emote tip about " + n)
                            });
                            break
                        }
                    }
                    a.loadedDoubleClickTranslation || e.settings.get("dblclickTranslation") === !1 || (a.loadedDoubleClickTranslation = !0, $("body").on("dblclick", ".chat-line .message", function () {
                        var e = $(this).parent().data("sender"), t = decodeURIComponent($(this).data("raw"));
                        $(this).hasClass("timed-out") ? $(this).replaceWith(d.message(e, t)) : (c.translate($(this), e, t), $(this).text("Translating..")), $("div.tipsy").remove()
                    }));
                    var S = $(".ember-chat .chat-interface"), M = S.find("textarea"), L = S.find(".send-chat-button");
                    M.attr("maxlength", "500"), M.off("keydown").off("keyup").off("mouseup"), L.off(), M.on("keyup", function (e) {
                        e.which !== s.Tab && e.which !== s.Shift && (c.tabCompletion(e), c.whisperReply(e))
                    }), M.on("keydown", function (t) {
                        var n = S.find(".suggestions");
                        if (t.which === s.Enter) {
                            var a = M.val().trim(), o = !1;
                            if (t.shiftKey || !a.length)return t.preventDefault();
                            if (n.length)return n.find(".highlighted").children().click(), t.preventDefault();
                            "/" === a.charAt(0) && (o = r.commands(a));
                            var l = a.toLowerCase().split(" ");
                            return l.indexOf("twitch") > -1 && l.indexOf("amazon") > -1 && l.indexOf("google") > -1 && c.serverMessage('<img src="https://cdn.betterttv.net/special/twitchtrollsgoogle.gif"/>'), o || c.sendMessage(a), e.settings.get("chatLineHistory") === !0 && (-1 !== i.chatHistory.indexOf(a) && i.chatHistory.splice(i.chatHistory.indexOf(a), 1), i.chatHistory.unshift(a)), M.val(""), t.preventDefault()
                        }
                        n.length && t.which !== s.Shift && n.remove(), t.which !== s.Tab || t.ctrlKey || (c.tabCompletion(t), t.preventDefault()), c.chatLineHistory(M, t)
                    }), L.on("click", function () {
                        var t = M.val().trim(), n = !1;
                        t.length && ("/" === t.charAt(0) && (n = r.commands(t)), n || c.sendMessage(t), e.settings.get("chatLineHistory") === !0 && (-1 !== i.chatHistory.indexOf(t) && i.chatHistory.splice(i.chatHistory.indexOf(t), 1), i.chatHistory.unshift(t)), M.val(""))
                    }), $(".ember-chat .chat-messages .chat-line").remove(), $.getJSON("https://api.betterttv.net/2/channels/" + encodeURIComponent(e.getChannel()) + "/history").done(function (t) {
                        t.messages.length && t.messages.forEach(function (t) {
                            var n = [];
                            t.user.name === t.channel.name && n.push("owner"), e.chat.helpers.isIgnored(t.user.name) || (t = e.chat.templates.privmsg(!1, !1, !1, !1, {
                                message: t.message,
                                time: new Date(t.date.replace("T", " ").replace(/\.[0-9]+Z/, " GMT")).toLocaleTimeString().replace(/^(\d{0,2}):(\d{0,2}):(.*)$/i, "$1:$2"),
                                nickname: t.user.displayName,
                                sender: t.user.name,
                                badges: e.chat.helpers.assignBadges(n),
                                color: e.chat.helpers.calculateColor(t.user.color),
                                emotes: t.parsedEmotes
                            }), $(".ember-chat .chat-messages .tse-content .chat-lines").append(t))
                        })
                    }).always(function () {
                        c.serverMessage("<center><small>BetterTTV v" + e.info.version + " Loaded.</small></center>"), c.serverMessage("Welcome to " + c.lookupDisplayName(e.getChannel()) + "'s chat room!", !0), e.chat.helpers.scrollChat()
                    }), e.ws.joinChannel(), i.chatters = {}, i.chatters[e.getChannel()] = {lastWhisper: 0}, i.__messageTimer || (i.__messageTimer = setInterval(r.shiftQueue, 500)), $(window).off("blur focus").on("blur focus", function (e) {
                        var t = $(this).data("prevType");
                        t !== e.type && ("blur" === e.type ? i.activeView = !1 : "focus" === e.type && ($(".chat-interface textarea").focus(), i.activeView = !0)), $(this).data("prevType", e.type)
                    }), $(window).off("keydown").on("keydown", function (t) {
                        var n = t.keyCode || t.which;
                        if ($(".bttv-mod-card").length && e.settings.get("modcardsKeybinds") === !0) {
                            var a = $(".bttv-mod-card").data("user");
                            switch (n) {
                                case s.Esc:
                                    $(".bttv-mod-card").remove();
                                    break;
                                case s.t:
                                    c.timeout(a), $(".bttv-mod-card").remove();
                                    break;
                                case s.p:
                                    c.timeout(a, 1), $(".bttv-mod-card").remove();
                                    break;
                                case s.a:
                                    c.sendMessage("!permit " + a), $(".bttv-mod-card").remove();
                                    break;
                                case s.u:
                                    c.sendMessage("/unban " + a), $(".bttv-mod-card").remove();
                                    break;
                                case s.b:
                                    c.ban(a), $(".bttv-mod-card").remove();
                                    break;
                                case s.i:
                                    c.sendMessage("/ignore " + a), $(".bttv-mod-card").remove();
                                    break;
                                case s.w:
                                    t.preventDefault(), M = $(".ember-chat .chat-interface").find("textarea"), M.val("/w " + a + " "), M.focus(), $(".bttv-mod-card").remove()
                            }
                        }
                    })
                }
            }
        }, {
            "../features/anon-chat": 13,
            "../features/chat-load-settings": 20,
            "../features/custom-timeouts": 28,
            "../features/override-emotes": 43,
            "../helpers/debug": 47,
            "../keycodes": 52,
            "../vars": 68,
            "./handlers": 4,
            "./helpers": 5,
            "./rooms": 7,
            "./store": 8,
            "./templates": 10,
            "./tmi": 11
        }],
        10: [function (t, n, a) {
            var o = t("./tmi"), s = t("./store"), i = t("./helpers"), r = a.badge = function (t, n, a) {
                return '<div class="' + t + (e.settings.get("alphaTags") && -1 !== ["admin", "global-moderator", "staff", "broadcaster", "moderator", "turbo", "ign"].indexOf(t) ? " alpha" + (e.settings.get("darkenedMode") ? "" : " invert") : "") + ' badge" title="' + a + '">' + n + "</div> "
            }, c = a.badges = function (e) {
                var t = '<span class="badges">';
                return e.forEach(function (e) {
                    t += r(e.type, e.name, e.description)
                }), t += "</span>"
            }, l = a.escape = function (e) {
                return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }, d = a.from = function (e, t) {
                return "<span " + (t ? 'style="color: ' + t + ';" ' : "") + 'class="from">' + l(e) + '</span><span class="colon">:</span>' + ("jtv" !== e ? "&nbsp;<wbr></wbr>" : "")
            }, h = a.timestamp = function (e) {
                return '<span class="timestamp"><small>' + e + "</small></span>"
            }, u = a.modicons = function () {
                return '<span class="mod-icons"><a class="timeout" title="Timeout">Timeout</a><a class="ban" title="Ban">Ban</a><a class="unban" title="Unban" style="display: none;">Unban</a></span>'
            }, g = a.linkify = function (e) {
                var t = /(?:https?:\/\/)?(?:[-a-zA-Z0-9@:%_\+~#=]+\.)+[a-z]{2,6}\b(?:(?:[-a-zA-Z0-9@:%_\+.~#?&\/=!,]+)(?:[-a-zA-Z0-9@:%_\+.~#?&\/=]))?/gi;
                return e.replace(t, function (e) {
                    if (/\x02/.test(e))return e;
                    if (e.indexOf("@") > -1 && (-1 === e.indexOf("/") || e.indexOf("@") < e.indexOf("/")))return '<a href="mailto:' + e + '">' + e + "</a>";
                    var t = e.replace(/^(?!(?:https?:\/\/|mailto:))/i, "http://");
                    return '<a href="' + t + '" target="_blank">' + e + "</a>"
                })
            }, p = a.emoticonBTTV = function (e) {
                var t = e.channel ? 'data-channel="' + e.channel + '" ' : "";
                return '<img class="emoticon bttv-emo-' + e.id + '" src="' + e.urlTemplate.replace("{{image}}", "1x") + '" srcset="' + e.urlTemplate.replace("{{image}}", "2x") + ' 2x" ' + t + 'data-regex="' + encodeURIComponent(e.code) + '" />'
            }, m = a.jtvEmoticonize = function (e) {
                var t = ["https://cdn.betterttv.net/emotes/jtv/happy.gif", "https://cdn.betterttv.net/emotes/jtv/sad.gif", "https://cdn.betterttv.net/emotes/mw.png", "https://cdn.betterttv.net/emotes/jtv/angry.gif", "https://cdn.betterttv.net/emotes/jtv/bored.gif", "https://cdn.betterttv.net/emotes/jtv/drunk.gif", "https://cdn.betterttv.net/emotes/jtv/cool.gif", "https://cdn.betterttv.net/emotes/jtv/surprised.gif", "https://cdn.betterttv.net/emotes/jtv/horny.gif", "https://cdn.betterttv.net/emotes/jtv/skeptical.gif", "https://cdn.betterttv.net/emotes/jtv/wink.gif", "https://cdn.betterttv.net/emotes/jtv/raspberry.gif", "https://cdn.betterttv.net/emotes/jtv/winkberry.gif", "https://cdn.betterttv.net/emotes/jtv/pirate.gif"];
                return t[e - 1]
            }, f = a.emoticon = function (t, n) {
                return 15 > t && e.settings.get("showMonkeyEmotes") === !0 ? '<img class="emoticon ttv-emo-' + t + '" src="' + m(t) + '" data-id="' + t + '" data-regex="' + encodeURIComponent(n) + '" />' : '<img class="emoticon ttv-emo-' + t + '" src="https://static-cdn.jtvnw.net/emoticons/v1/' + t + '/1.0" srcset="https://static-cdn.jtvnw.net/emoticons/v1/' + t + '/2.0 2x" data-id="' + t + '" data-regex="' + encodeURIComponent(n) + '" />'
            };
            a.emoticonCss = function (e, t) {
                var n = "";
                return e.height > 18 && (n = "margin: -" + (e.height - 18) / 2 + "px 0px"), ".emo-" + t + ' {background-image: url("' + e.url + '");height: ' + e.height + "px;width: " + e.width + "px;" + n + "}"
            };
            var v = a.emoticonize = function (e, t) {
                if (!t)return [e];
                var n = [], a = [];
                return Object.keys(t).forEach(function (e) {
                    for (var n = t[e], o = n.length - 1; o >= 0; o--)a.push({id: e, first: n[o][0], last: n[o][1]})
                }), a.sort(function (e, t) {
                    return t.first - e.first
                }), a.forEach(function (t) {
                    var a = e.slice(t.first, t.last + 1);
                    n.unshift(e.slice(t.last + 1)), n.unshift([f(t.id, a)]), e = e.slice(0, t.first)
                }), n.unshift(e), n
            }, b = a.bttvEmoticonize = function (t, n, a) {
                if (n.restrictions) {
                    if (n.restrictions.channels.length && -1 === n.restrictions.channels.indexOf(e.getChannel()))return t;
                    if (n.restrictions.games.length && o().channel && -1 === n.restrictions.games.indexOf(o().channel.game))return t;
                    var s = a ? i.getEmotes(a) : [];
                    if (n.restrictions.emoticonSet && -1 === s.indexOf(n.restrictions.emoticonSet))return t
                }
                return t.replace(n.code, p(n))
            }, y = a.bttvMessageTokenize = function (t, n) {
                for (var a = n.split(" "), o = 0, i = 0; i < a.length; i++) {
                    var r = a[i];
                    if (e.settings.get("chatImagePreview") === !0) {
                        var c = new RegExp("(https?://.)([a-z-_0-9/:.%+]*.(jpg|jpeg|png|gif))", "i");
                        if (c.test(r)) {
                            r = e.chat.imagePreview(r), a[i] = r;
                            continue
                        }
                    }
                    var d = r.replace(/(^[~!@#$%\^&\*\(\)]+|[~!@#$%\^&\*\(\)]+$)/g, ""), h = null;
                    s.bttvEmotes.hasOwnProperty(r) ? h = s.bttvEmotes[r] : s.bttvEmotes.hasOwnProperty(d) && (h = s.bttvEmotes[d]), h && h.urlTemplate && e.settings.get("bttvEmotes") === !0 && ("png" === h.imageType || "gif" === h.imageType && e.settings.get("bttvGIFEmotes") === !0 && 5 > o) ? (r = b(r, h, t), "567b5b520e984428652809b6" === h.id && o++) : (r = l(r), r = g(r)), a[i] = r
                }
                return a.join(" ")
            };
            a.moderationCard = function (e, n, a) {
                var o = t("../templates/moderation-card");
                return o({user: e, top: n, left: a})
            }, a.suggestions = function (e, n) {
                var a = t("../templates/chat-suggestions");
                return a({suggestions: e, index: n})
            };
            var w = a.message = function (t, n, a, o, s) {
                o = o || !1, s = s || !1;
                var r = encodeURIComponent(n);
                if ("jtv" !== t) {
                    for (var c = v(n, a), l = 0; l < c.length; l++)c[l] = "string" == typeof c[l] ? y(t, c[l]) : c[l][0];
                    n = c.join(" ")
                }
                var d = !1;
                return e.settings.get("hideSpam") && i.isSpammer(t) && !i.isModerator(t) && !s && (n = '<span style="color: #999">&lt;spam deleted&gt;</span>', d = !0), '<span class="message ' + (d ? "spam" : "") + '" ' + (o ? 'style="color: ' + o + '" ' : "") + 'data-raw="' + r + '" data-emotes="' + (a ? encodeURIComponent(JSON.stringify(a)) : "false") + '">' + n + "</span>"
            };
            a.privmsg = function (e, t, n, a, o) {
                return '<div class="chat-line' + (e ? " highlight" : "") + (t ? " action" : "") + (n ? " admin" : "") + '" data-sender="' + o.sender + '">' + h(o.time) + " " + (a ? u() : "") + " " + c(o.badges) + d(o.nickname, o.color) + w(o.sender, o.message, o.emotes, t && !e ? o.color : !1) + "</div>"
            };
            var _ = a.whisperName = function (e, t, n, a, o, s) {
                return '<span style="color: ' + o + ';" class="from" data-sender="' + e + '">' + l(n) + '</span><svg class="svg-whisper-arrow" height="10px" version="1.1" width="16px"><polyline points="6 2, 10 6, 6 10, 6 2"></polyline></svg><span style="color: ' + s + ';" class="from" data-sender="' + t + '">' + l(a) + '</span><span class="colon">:</span>&nbsp;<wbr></wbr>'
            };
            a.whisper = function (e) {
                return '<div class="chat-line whisper" data-sender="' + e.sender + '">' + h(e.time) + " " + _(e.sender, e.receiver, e.from, e.to, e.fromColor, e.toColor) + w(e.sender, e.message, e.emotes, !1) + "</div>"
            }
        }, {
            "../templates/chat-suggestions": 60,
            "../templates/moderation-card": 63,
            "./helpers": 5,
            "./store": 8,
            "./tmi": 11
        }],
        11: [function (t, n) {
            n.exports = function () {
                return e.getChatController() ? e.getChatController().currentRoom : !1
            }
        }, {}],
        12: [function (t) {
            var n = t("./helpers/debug"), a = t("./vars"), o = t("./twitch-api"), s = t("./ws"), i = t("./storage"), r = t("./settings"), c = t("./login-iframe");
            e.info = {
                version: "6.8", release: 44, versionString: function () {
                    return e.info.version + "R" + e.info.release
                }
            }, e.TwitchAPI = o, e.vars = a, e.storage = new i, e.settings = new r, e.getChannel = function () {
                return window.Ember && window.App && "channel.index" === App.__container__.lookup("controller:application").get("currentRouteName") ? App.__container__.lookup("controller:channel").get("id") : e.getChatController() && e.getChatController().currentRoom ? e.getChatController().currentRoom.id : window.PP && PP.channel ? PP.channel : ""
            }, e.getChatController = function () {
                return window.Ember && window.App && App.__container__.lookup("controller:chat") ? App.__container__.lookup("controller:chat") : !1
            }, e.notify = function (t, n) {
                if (t) {
                    n = n || {};
                    var a = n.title || "Notice", o = n.url || "", s = n.image || "https://cdn.betterttv.net/style/logos/bttv_logo.png", i = n.tag || "bttv_" + t, r = n.permanent || !1, c = n.expires || 6e4;
                    if (i = "bttv_" + i.toLowerCase().replace(/[^\w_]/g, ""), !$("body#chat").length) {
                        var l = function () {
                            var n = new window.Notification(a, {icon: s, body: t, tag: i});
                            r === !1 && (n.onshow = function () {
                                setTimeout(function () {
                                    n.close()
                                }, 1e4)
                            }), "" !== o && (n.onclick = function () {
                                window.open(o), n.close()
                            }), e.storage.pushObject("bttvNotifications", i, {expire: Date.now() + c}), setTimeout(function () {
                                e.storage.spliceObject("bttvNotifications", i)
                            }, c)
                        };
                        if (e.settings.get("desktopNotifications") === !0 && (window.Notification && "granted" === Notification.permission || window.webkitNotifications && 0 === webkitNotifications.checkPermission())) {
                            var d = e.storage.getObject("bttvNotifications");
                            for (var h in d)if (d.hasOwnProperty(h)) {
                                var u = d[h];
                                if (h === i) {
                                    if (!(u.expire < Date.now()))return;
                                    e.storage.spliceObject("bttvNotifications", h)
                                }
                            }
                            l()
                        } else {
                            if (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br /><br />").replace(/Click here(.*)./, '<a style="color: white;" target="_blank" href="' + o + '">Click here$1.</a>'), !$.gritter)return;
                            $.gritter.add({title: a, image: s, text: t, sticky: r})
                        }
                    }
                }
            }, e.chat = t("./chat"), String.prototype.capitalize = function () {
                return this.charAt(0).toUpperCase() + this.slice(1)
            };
            var l = t("./features/clear-clutter"), d = t("./features/channel-reformat"), h = t("./features/brand"), u = t("./features/check-messages"), g = t("./features/directory-functions"), p = t("./features/check-following"), m = t("./features/check-broadcast-info"), f = t("./features/handle-background"), v = t("./features/darken-page"), b = t("./features/split-chat"), y = t("./features/flip-dashboard"), w = t("./features/format-dashboard"), _ = t("./features/dashboard-channelinfo"), C = t("./features/giveaway-compatibility"), k = t("./features/handle-twitchchat-emotes"), x = t("./features/emoticon-text-in-clipboard"), T = t("./features/create-settings"), S = t("./features/image-preview").enablePreview, M = t("./features/auto-theatre-mode"), L = t("./features/host-btn-below-video"), A = t("./features/conversations"), D = t("./helpers/massunban-popup"), E = function () {
                n.log("Modifying Chat Functionality"), e.getChatController() && e.getChannel() && e.chat.takeover()
            }, O = function () {
                if (window.Ember) {
                    var t = 0, o = function (e, n) {
                        n = n || 0, n > 5 && e(!1), setTimeout(function () {
                            0 === t ? e(!0) : o(e, ++n)
                        }, 1e3)
                    };
                    Ember.subscribe("render", {
                        before: function () {
                            t++
                        }, after: function (n, s, i) {
                            if (t--, i.template)switch ("channel.index" !== App.__container__.lookup("controller:application").get("currentRouteName") && $("#main_col").removeAttr("style"), i.template) {
                                case"shared/right-column":
                                    o(function (t) {
                                        t && (e.chat.store.isLoaded = !1, E())
                                    });
                                    break;
                                case"channel/index":
                                    o(function (t) {
                                        t && (f(), l(), d(), L(), App.__container__.lookup("controller:channel").get("theatreMode") === !1 && e.settings.get("autoTheatreMode") === !0 && M(), $(window).trigger("resize"), setTimeout(function () {
                                            $(window).trigger("resize")
                                        }, 3e3))
                                    });
                                    break;
                                case"channel/profile":
                                    o(function (e) {
                                        e && (a.emotesLoaded = !1, E(), d(), $(window).trigger("resize"))
                                    });
                                    break;
                                case"directory/following":
                                    o(function (e) {
                                        e && g()
                                    })
                            }
                        }
                    })
                }
                var i = function (e) {
                    return window.Twitch.user.isLoggedIn() ? void window.Twitch.user().then(function (t) {
                        a.userData.isLoggedIn = !0, a.userData.name = t.login, a.userData.displayName = t.name, a.userData.oauthToken = t.chat_oauth_token, e()
                    }) : void e()
                }, r = function () {
                    e.ws = new s, A(), l(), d(), m(), h(), v(), b(), y(), w(), u(), p(), C(), _(), g(), k(), x(), L(), e.settings.get("chatImagePreview") === !0 && S(), e.settings.get("autoTheatreMode") === !0 && M(), $(window).trigger("resize")
                }, c = function () {
                    d(), $(window).trigger("resize"), E(), g()
                }, O = function () {
                    !function (e) {
                        e.gritter = {}, e.gritter.options = {
                            position: "top-left",
                            class_name: "",
                            fade_in_speed: "medium",
                            fade_out_speed: 1e3,
                            time: 6e3
                        }, e.gritter.add = function (e) {
                            try {
                                return t.add(e || {})
                            } catch (n) {
                                var a = "Gritter Error: " + n;
                                "undefined" != typeof console && console.error ? console.error(a, e) : alert(a)
                            }
                        }, e.gritter.remove = function (e, n) {
                            t.removeSpecific(e, n || {})
                        }, e.gritter.removeAll = function (e) {
                            t.stop(e || {})
                        };
                        var t = {
                            position: "",
                            fade_in_speed: "",
                            fade_out_speed: "",
                            time: "",
                            _custom_timer: 0,
                            _item_count: 0,
                            _is_setup: 0,
                            _tpl_close: '<div class="gritter-close"></div>',
                            _tpl_title: '<span class="gritter-title">[[title]]</span>',
                            _tpl_item: '<div id="gritter-item-[[number]]" class="gritter-item-wrapper [[item_class]]" style="display:none"><div class="gritter-top"></div><div class="gritter-item">[[close]][[image]]<div class="[[class_name]]">[[title]]<p>[[text]]</p></div><div style="clear:both"></div></div><div class="gritter-bottom"></div></div>',
                            _tpl_wrap: '<div id="gritter-notice-wrapper"></div>',
                            add: function (n) {
                                if ("string" == typeof n && (n = {text: n}), !n.text)throw'You must supply "text" parameter.';
                                this._is_setup || this._runSetup();
                                var a = n.title, o = n.text, s = n.image || "", i = n.sticky || !1, r = n.class_name || e.gritter.options.class_name, c = e.gritter.options.position, l = n.time || "";
                                this._verifyWrapper(), this._item_count++;
                                var d = this._item_count, h = this._tpl_item;
                                e(["before_open", "after_open", "before_close", "after_close"]).each(function (a, o) {
                                    t["_" + o + "_" + d] = e.isFunction(n[o]) ? n[o] : function () {
                                    }
                                }), this._custom_timer = 0, l && (this._custom_timer = l);
                                var u = "" != s ? '<img src="' + s + '" class="gritter-image" />' : "", g = "" != s ? "gritter-with-image" : "gritter-without-image";
                                if (a = a ? this._str_replace("[[title]]", a, this._tpl_title) : "", h = this._str_replace(["[[title]]", "[[text]]", "[[close]]", "[[image]]", "[[number]]", "[[class_name]]", "[[item_class]]"], [a, o, this._tpl_close, u, this._item_count, g, r], h), this["_before_open_" + d]() === !1)return !1;
                                e("#gritter-notice-wrapper").addClass(c).append(h);
                                var p = e("#gritter-item-" + this._item_count);
                                return p.fadeIn(this.fade_in_speed, function () {
                                    t["_after_open_" + d](e(this))
                                }), i || this._setFadeTimer(p, d), e(p).bind("mouseenter mouseleave", function (n) {
                                    "mouseenter" == n.type ? i || t._restoreItemIfFading(e(this), d) : i || t._setFadeTimer(e(this), d), t._hoverState(e(this), n.type)
                                }), e(p).find(".gritter-close").click(function () {
                                    t.removeSpecific(d, {}, null, !0)
                                }), d
                            },
                            _countRemoveWrapper: function (t, n, a) {
                                n.remove(), this["_after_close_" + t](n, a), 0 == e(".gritter-item-wrapper").length && e("#gritter-notice-wrapper").remove()
                            },
                            _fade: function (e, n, a, o) {
                                var a = a || {}, s = "undefined" != typeof a.fade ? a.fade : !0, i = a.speed || this.fade_out_speed, r = o;
                                this["_before_close_" + n](e, r), o && e.unbind("mouseenter mouseleave"), s ? e.animate({opacity: 0}, i, function () {
                                    e.animate({height: 0}, 300, function () {
                                        t._countRemoveWrapper(n, e, r)
                                    })
                                }) : this._countRemoveWrapper(n, e)
                            },
                            _hoverState: function (e, t) {
                                "mouseenter" == t ? (e.addClass("hover"), e.find(".gritter-close").show()) : (e.removeClass("hover"), e.find(".gritter-close").hide())
                            },
                            removeSpecific: function (t, n, a, o) {
                                if (!a)var a = e("#gritter-item-" + t);
                                this._fade(a, t, n || {}, o)
                            },
                            _restoreItemIfFading: function (e, t) {
                                clearTimeout(this["_int_id_" + t]), e.stop().css({opacity: "", height: ""})
                            },
                            _runSetup: function () {
                                for (opt in e.gritter.options)this[opt] = e.gritter.options[opt];
                                this._is_setup = 1
                            },
                            _setFadeTimer: function (e, n) {
                                var a = this._custom_timer ? this._custom_timer : this.time;
                                this["_int_id_" + n] = setTimeout(function () {
                                    t._fade(e, n)
                                }, a)
                            },
                            stop: function (t) {
                                var n = e.isFunction(t.before_close) ? t.before_close : function () {
                                }, a = e.isFunction(t.after_close) ? t.after_close : function () {
                                }, o = e("#gritter-notice-wrapper");
                                n(o), o.fadeOut(function () {
                                    e(this).remove(), a()
                                })
                            },
                            _str_replace: function (e, t, n, a) {
                                var o = 0, s = 0, i = "", r = "", c = 0, l = 0, d = [].concat(e), h = [].concat(t), u = n, g = h instanceof Array, p = u instanceof Array;
                                for (u = [].concat(u), a && (this.window[a] = 0), o = 0, c = u.length; c > o; o++)if ("" !== u[o])for (s = 0, l = d.length; l > s; s++)i = u[o] + "", r = g ? void 0 !== h[s] ? h[s] : "" : h[0], u[o] = i.split(d[s]).join(r), a && u[o] !== i && (this.window[a] += (i.length - u[o].length) / d[s].length);
                                return p ? u : u[0]
                            },
                            _verifyWrapper: function () {
                                0 == e("#gritter-notice-wrapper").length && e("body").append(this._tpl_wrap)
                            }
                        }
                    }($), function (e) {
                        e.fn.drags = function (t) {
                            if (t = e.extend({
                                    handle: "",
                                    cursor: "move",
                                    el: ""
                                }, t), "" === t.handle)var n = this; else var n = this.find(t.handle);
                            return n.css("cursor", t.cursor).on("mousedown", function (n) {
                                if ("" === t.handle)var a = e(this).addClass("bttv-draggable"); else if ("" === t.el)var a = e(this).addClass("active-handle").parent().addClass("bttv-draggable"); else {
                                    e(this).addClass("active-handle");
                                    var a = e(t.el).addClass("bttv-draggable")
                                }
                                var o = a.css("z-index"), s = a.outerHeight(), i = a.outerWidth(), r = a.offset().top + s - n.pageY, c = a.offset().left + i - n.pageX;
                                a.css("z-index", 1e3).parents().on("mousemove", function (t) {
                                    e(".bttv-draggable").offset({
                                        top: t.pageY + r - s,
                                        left: t.pageX + c - i
                                    }).on("mouseup", function () {
                                        e(this).removeClass("bttv-draggable").css("z-index", o)
                                    })
                                }), n.preventDefault()
                            }).on("mouseup", function () {
                                "" === t.handle ? e(this).removeClass("bttv-draggable") : (e(this).removeClass("active-handle"), e(t.el).removeClass("bttv-draggable"))
                            })
                        }
                    }(jQuery)
                };
                $(document).ready(function () {
                    i(function () {
                        return T(), e.settings.load(), n.log("BTTV v" + e.info.versionString()), n.log("CALL init " + document.URL), /\?bttvMassUnban=true/.test(window.location) ? new D : (r(), setTimeout(c, 3e3), void O())
                    })
                })
            }, N = function (t) {
                if (t = t || 0, !(t > 9)) {
                    if ("undefined" == typeof window.jQuery)return n.log("jQuery is undefined."), void setTimeout(function () {
                        N(t + 1)
                    }, 1e3);
                    var a = window.jQuery;
                    e.jQuery = a, O()
                }
            };
            return -1 !== document.URL.indexOf("receiver.html") || -1 !== document.URL.indexOf("cbs_ad_local.html") ? void n.log("HTML file called by Twitch.") : location.pathname.match(/^\/(.*)\/popout/) ? void n.log("Popout player detected.") : window.Twitch && window.Twitch.video && window.Twitch.api && window.Twitch.user ? void(window.BTTVLOADED !== !0 && (n.log("BTTV LOADED " + document.URL), BTTVLOADED = !0, N())) : (n.log("window.Twitch not detected."), void c())
        }, {
            "./chat": 2,
            "./features/auto-theatre-mode": 15,
            "./features/brand": 16,
            "./features/channel-reformat": 18,
            "./features/check-broadcast-info": 21,
            "./features/check-following": 22,
            "./features/check-messages": 23,
            "./features/clear-clutter": 24,
            "./features/conversations": 25,
            "./features/create-settings": 26,
            "./features/darken-page": 29,
            "./features/dashboard-channelinfo": 30,
            "./features/directory-functions": 31,
            "./features/emoticon-text-in-clipboard": 33,
            "./features/flip-dashboard": 34,
            "./features/format-dashboard": 35,
            "./features/giveaway-compatibility": 36,
            "./features/handle-background": 37,
            "./features/handle-twitchchat-emotes": 38,
            "./features/host-btn-below-video": 39,
            "./features/image-preview": 40,
            "./features/split-chat": 45,
            "./helpers/debug": 47,
            "./helpers/massunban-popup": 50,
            "./login-iframe": 54,
            "./settings": 56,
            "./storage": 57,
            "./twitch-api": 67,
            "./vars": 68,
            "./ws": 69
        }],
        13: [function (t, n) {
            var a = t("../vars"), o = window.location.search && window.location.search.indexOf("bttvAnonChat=true") > -1;
            n.exports = function (t) {
                if (a.userData.isLoggedIn) {
                    var n = !1;
                    n = o ? !0 : "boolean" == typeof t ? t : e.settings.get("anonChat");
                    var s = e.chat.tmi();
                    if (s) {
                        var i = s.tmiSession;
                        if (i) {
                            var r = s.tmiRoom;
                            if (r)try {
                                var c = i._connections.prod;
                                if (!c)return;
                                var l = c._opts;
                                n ? l.nickname === a.userData.name && (l.nickname = "justinfan12345", r._showAdminMessage("BetterTTV: [Anon Chat] Logging you out of chat.."), e.chat.store.ignoreDC = !0, c._send("QUIT")) : l.nickname !== a.userData.name && (l.nickname = a.userData.name, r._showAdminMessage("BetterTTV: [Anon Chat] Logging you back into chat.."), e.chat.store.ignoreDC = !0, c._send("QUIT"))
                            } catch (d) {
                                r._showAdminMessage("BetterTTV: [Anon Chat] We encountered an error anonymizing your chat. You won't be hidden in this channel.")
                            }
                        }
                    }
                }
            }
        }, {"../vars": 68}],
        14: [function (t, n) {
            var a, o = t("../helpers/debug");
            n.exports = function () {
                e.settings.get("highlightFeedback") === !0 && (a || (o.log("loading audio feedback sound"), a = new Audio("https://cdn.betterttv.net/style/sounds/ts-tink.ogg")), a.load(), a.play())
            }
        }, {"../helpers/debug": 47}],
        15: [function (e, t) {
            t.exports = function () {
                window.Ember && window.App && "channel.index" === App.__container__.lookup("controller:application").get("currentRouteName") && App.__container__.lookup("controller:channel").send("toggleTheatre")
            }
        }, {}],
        16: [function (t, n) {
            var a = t("../helpers/debug");
            n.exports = function () {
                a.log("Branding Site with Better & Importing Styles");
                var t = $("<img />");
                $("#large_nav #logo").length && (t.attr("src", "https://cdn.betterttv.net/style/logos/logo_icon.png"), t.css({
                    "z-index": 9e3,
                    "margin-left": "-76px",
                    "margin-top": "-16px",
                    "float": "left",
                    position: "absolute"
                }), $("#large_nav #logo").append(t)), $(".column .content #you").append('<a class="bttvSettingsIcon" href="#""></a>'), $(".bttvSettingsIcon").click(function (e) {
                    e.preventDefault(), $("#chat_settings_dropmenu").hide(), $("#bttvSettingsPanel").show("slow")
                });
                var n = document.createElement("link");
                if (n.setAttribute("href", "https://cdn.betterttv.net/style/stylesheets/betterttv.css?" + e.info.versionString()), n.setAttribute("type", "text/css"), n.setAttribute("rel", "stylesheet"), $("body").append(n), e.settings.get("showChatIndentation") !== !1) {
                    var o = $("<style></style>");
                    o.attr("id", "bttvChatIndentation"), o.html("#chat_line_list .line p { padding-left: 16px;text-indent: -16px; }"), $("body").append(o)
                }
                $("body#chat").css("overflow-y", "hidden"), $("#chat_loading_spinner").attr("src", "data:image/gif;base64,R0lGODlhFgAWAPMGANfX1wAAADc3N1tbW6Ojo39/f2tra8fHx9nZ2RsbG+np6SwsLEtLS4eHh7q6ugAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hoiQ3JlYXRlZCB3aXRoIENoaW1wbHkuY29tIgAh+QQJCgAGACwAAAAAFgAWAAAEbNCESY29OEvBRdDgFXReGI7dZ2oop65YWypIjSgGbSOW/CGAIICnEAIOPdLPSDQiNykDUNgUPn1SZs6ZjE6D1eBVmaVurV1XGXwWp0vfYfv4XpqLaKg6HqbrZzs4OjZ1MBlYhiJkiYWMfy+GEQAh+QQJCgAGACwAAAAAFgAWAAAEctDIKYO9NKe9lwlCKAQZlQzo4IEiWUpnuorjC6fqR7tvjM4tgwJBJN5kuqACwGQef8kQadkEPHMsqbBqNfiwu231CtRSm+Ro7ez04sprbjobH7uR9Kn8Ds2L0XxgSkVGgXA8JV+HNoZqiBocCYuMJX4vEQAh+QQJCgAAACwAAAAAFgAWAAAEcxDISWu4uNLEOwhCKASSGA5AMqxD8pkkIBR0gaqsC4rxXN+s1otXqtlSQR2s+EPmhqGeEfjcRZk06kpJlE2dW+gIe8SFrWNv0yxES9dJ8TsLbi/VdDb3ii/H3WRadl0+eX93hX5ViCaCe2kaKR0ccpGWlREAIfkECQoAAQAsAAAAABYAFgAABHUwyEmrvTisxHlmQigw2mAOiWSsaxMwRVyQy4mqRE64sEzbqYBBt3vJZqVTcKjjHX9KXNPoS5qWRGe1FhVmqTHoVZrThq0377R35o7VZTDSnWbG2XMguYgX1799aFhrT4J7ZnldLC1yfkEXICKOGRcbHY+UlBEAIfkECQoAAQAsAAAAABYAFgAABHIwyEmrvThrOoQXTFYYpFEEQ6EWgkS8rxMUMHGmaxsQR3/INNhtxXL5frPaMGf0AZUooo7nTAqjzN3xecWpplvra/lt9rhjbFlbDaa9RfZZbFPHqXN3HQ5uQ/lmSHpkdzVoe1IiJSZ2OhsTHR8hj5SVFREAIfkECQoAAQAsAAAAABYAFgAABGowyEmrvTjrzWczIJg5REk4QWMShoQAMKAExGEfRLq2QQzPtVtOZeL5ZLQbTleUHIHK4c7pgwqZJWM1eSVmqTGrTdrsbYNjLAv846a9a3PYvYRr5+j6NPDCR9U8FyQmKHYdHiEih4uMjRQRACH5BAkKAAEALAAAAAAWABYAAARkMMhJq7046807d0QYSkhZKoFiIqhzvAchATSNIjWABC4sBznALbfrvX7BYa0Ii81yShrT96xFdbwmEhrALbNUINcrBR+rti7R7BRb1V9jOwkvy38rVmrV0nokICI/f4SFhocSEQAh+QQJCgABACwAAAAAFgAWAAAEWjDISau9OOvNu7dIGCqBIiKkeUoH4AIk8gJIOR/sHM+1cuev3av3C7SCAdnQ9sIZdUke0+U8uoQuYhN4jS592ydSmZ0CqlAyzYweS8FUyQlVOqXmn7x+z+9bIgA7")
            }
        }, {"../helpers/debug": 47}],
        17: [function (e, t) {
            var n = e("../../helpers/debug"), a = e("../../vars"), o = [".dynamic-player", ".dynamic-target-player"], s = [".dynamic-player object", ".dynamic-player video", ".dynamic-player iframe", ".dynamic-target-player object", ".dynamic-target-player video", ".dynamic-target-player iframe"], i = function (e) {
                return o.join(", ") + ", " + s.join(", ") + " { width: 100% !important; height: " + e + "px !important; }"
            }, r = function () {
                for (var e = "undefined" != typeof $("#player .player").data("playertype"), t = 0; t < s.length; t++) {
                    var n = s[t];
                    if ($(n).length)return .5625 * $(n).width() + (n.indexOf("iframe") > -1 || e ? 0 : 30)
                }
                return -1
            };
            t.exports = function () {
                if (0 !== $("#main_col #channel").length && 0 !== $("#right_col").length) {
                    n.log("Page resized");
                    var e = $("#hostmode").length, t = $("#bttvPlayerStyle");
                    t.length || (t = $("<style></style>"), t.attr("id", "bttvPlayerStyle"), $("body").append(t)), $("#main_col").css(0 === a.chatWidth ? {marginRight: "0px"} : {marginRight: $("#right_col").width() + "px"});
                    var o = $(window).height(), s = r();
                    if (-1 !== s) {
                        var c, l, d;
                        if (e) {
                            var h = $(".hostmode-title-container").outerHeight(!0);
                            l = $(".target-meta").outerHeight(!0), d = $("#hostmode .channel-actions").outerHeight(!0);
                            var u = $(".close-hostmode").outerHeight(!0);
                            c = h + l + d + u + 33, $(".target-frame").css("height", $(window).height())
                        } else l = $("#broadcast-meta").outerHeight(!0), d = $(".stats-and-actions").outerHeight(), c = l + d;
                        var g = c + s;
                        t.html($(window).height() > g ? i(s) : i(o - c)), e || $("#channel_panels").masonry("reload")
                    }
                }
            }
        }, {"../../helpers/debug": 47, "../../vars": 68}],
        18: [function (t, n) {
            var a = t("../../helpers/debug"), o = t("../../keycodes"), s = t("../../vars"), i = t("./handle-resize");
            n.exports = function () {
                if (0 !== $("#main_col #channel").length && 0 !== $("#right_col").length) {
                    if (a.log("Reformatting Channel Page"), !s.loadedChannelResize) {
                        s.loadedChannelResize = !0;
                        var t = !1;
                        $(document).keydown(function (e) {
                            e.keyCode === o.r && e.altKey && $(window).trigger("resize")
                        }), $(document).mouseup(function (n) {
                            t !== !1 && (chatWidthStartingPoint && chatWidthStartingPoint === n.pageX ? "none" !== $("#right_col").css("display") && ($("#right_col").css({display: "none"}), $("#right_close").removeClass("open").addClass("closed"), s.chatWidth = 0) : s.chatWidth = $("#right_col").width(), e.settings.save("chatWidth", s.chatWidth), t = !1, i())
                        }), $(document).on("mousedown", "#right_close, #right_col .resizer", function (n) {
                            n.preventDefault(), t = n.pageX, chatWidthStartingPoint = n.pageX, "none" === $("#right_col").css("display") && ($("#right_col").css({display: "inherit"}), $("#right_close").removeClass("closed").addClass("open"), t = !1, $("#right_col").width() < 340 && $("#right_col").width($("#right_col .top").width()), s.chatWidth = $("#right_col").width(), e.settings.save("chatWidth", s.chatWidth), i())
                        }), $(document).mousemove(function (e) {
                            t && (s.chatWidth + t - e.pageX < 340 ? ($("#right_col").width(340), $("#right_col #chat").width(340), $("#right_col .top").width(340)) : s.chatWidth + t - e.pageX > 541 ? ($("#right_col").width(541), $("#right_col #chat").width(541), $("#right_col .top").width(541)) : ($("#right_col").width(s.chatWidth + t - e.pageX), $("#right_col #chat").width(s.chatWidth + t - e.pageX), $("#right_col .top").width(s.chatWidth + t - e.pageX)), i())
                        }), $(window).off("fluid-resize"), $(window).off("resize").resize(function () {
                            a.log("Debug: Resize Called"), setTimeout(i, 1e3)
                        })
                    }
                    e.settings.get.chatWidth && e.settings.get.chatWidth < 0 && e.settings.save("chatWidth", 0);
                    var n = e.storage.getObject("TwitchCache:Layout");
                    n.resource && n.resource.isRightColumnClosedByUserAction === !0 && (e.settings.save("chatWidth", 0), "0" === $("#right_col").width() && $("#right_col").width("340px"), n.resource.isRightColumnClosedByUserAction = !1, e.storage.putObject("TwitchCache:Layout", n)), 0 === $("#right_col .resizer").length && $("#right_col").append('<div class="resizer" onselectstart="return false;" title="Drag to enlarge chat =D"></div>'), $("#right_col:before").css("margin-left", "-1"), $("#right_col .bottom #controls #control_buttons .primary_button").css({
                        "float": "right",
                        marginRight: "-1px"
                    }), $("#right_nav").css({
                        "margin-left": "auto",
                        "margin-right": "auto",
                        width: "321px",
                        "float": "none",
                        border: "none"
                    }), $("#right_col .top").css("border-bottom", "1px solid rgba(0, 0, 0, 0.25)"), $("#right_close").unbind("click"), $("#right_close").removeAttr("data-ember-action"), $("#left_close").off("click").click(function () {
                        $(window).trigger("resize")
                    }), null !== e.settings.get("chatWidth") ? (s.chatWidth = e.settings.get("chatWidth"), s.chatWidth < 340 && (s.chatWidth = 0, e.settings.save("chatWidth", 0)), 0 === s.chatWidth ? ($("#right_col").css({display: "none"}), $("#right_close").removeClass("open").addClass("closed")) : ($("#right_col").width(s.chatWidth), $("#right_col #chat").width(s.chatWidth), $("#right_col .top").width(s.chatWidth)), $(window).trigger("resize")) : ("0" === $("#right_col").width() && $("#right_col").width("340px"), s.chatWidth = $("#right_col").width(), e.settings.save("chatWidth", $("#right_col").width()))
                }
            }
        }, {"../../helpers/debug": 47, "../../keycodes": 52, "../../vars": 68, "./handle-resize": 17}],
        19: [function (t, n) {
            var a = t("../vars"), o = t("../templates/channel-state"), s = "#bttv-channel-state-contain", i = ".chat-container .chat-header:first", r = ".chat-interface .chat-buttons-container .send-chat-button", c = function (e) {
                var t = new Date(0);
                for (t.setSeconds(e), t = t.toISOString().substr(11, 8), t = t.split(":"); "00" === t[0];)t.shift();
                return 1 === t.length && "0" === t[0].charAt(0) && (t[0] = parseInt(t[0], 10)), t.join(":")
            }, l = function () {
                e.chat.store.chatCountDown && clearInterval(e.chat.store.chatCountDown), e.chat.store.chatCountDown = !1, $(r).find("span").text("Chat")
            }, d = function (t) {
                e.chat.store.chatCountDown && clearInterval(e.chat.store.chatCountDown);
                var n = Date.now() + 1e3 * t;
                e.chat.store.chatCountDown = setInterval(function () {
                    var e = n - Date.now();
                    return 0 >= e ? l() : void $(r).find("span").text("Chat in " + c(Math.ceil(e / 1e3)))
                }, 500)
            };
            n.exports = function (t) {
                var n = $(s);
                switch (n.length || ($(i).append(o()), n = $(s), n.children().each(function () {
                    $(this).hide(), $(this).hasClass("slow") ? ($(this).find(".slow-time").tipsy({gravity: $.fn.tipsy.autoNS}), $(this).find("svg").tipsy({gravity: $.fn.tipsy.autoNS})) : $(this).tipsy({gravity: $.fn.tipsy.autoNS})
                })), t.type) {
                    case"roomstate":
                        var r;
                        if ("slow"in t.tags) {
                            var h = t.tags.slow;
                            e.chat.store.slowTime = h, n.find(".slow-time").attr("original-title", h + " seconds").text(c(h)), 0 === h ? (n.find(".slow").hide(), n.find(".slow-time").hide()) : (n.find(".slow").show(), n.find(".slow-time").show())
                        }
                        "r9k"in t.tags && (r = t.tags.r9k, r === !0 ? n.find(".r9k").show() : n.find(".r9k").hide()), "subs-only"in t.tags && (r = t.tags["subs-only"], r === !0 ? n.find(".subs-only").show() : n.find(".subs-only").hide());
                        break;
                    case"outgoing_message":
                        if (!a.userData.isLoggedIn || e.chat.helpers.isModerator(a.userData.name))return;
                        e.chat.store.slowTime > 0 ? d(e.chat.store.slowTime) : l();
                        break;
                    case"notice":
                        if (!("msg-id"in t.tags))return;
                        var u = t.tags["msg-id"];
                        if ("msg_slowmode" === u || "msg_timedout" === u) {
                            var g = /([0-9]+)/.exec(t.message);
                            if (!g)return;
                            var p = parseInt(g[1], 10);
                            d(p)
                        } else"msg_banned" === u && d(86400)
                }
            }
        }, {"../templates/channel-state": 58, "../vars": 68}],
        20: [function (t, n) {
            var a = t("../helpers/debug"), o = t("../vars"), s = t("../helpers/element").remove, i = t("./darken-page"), r = t("./split-chat");
            n.exports = function () {
                if ($(".ember-chat .chat-settings").length && !$(".ember-chat .chat-settings .bttvChatSettings").length) {
                    a.log("Loading BetterTTV Chat Settings"), $(".ember-chat .chat-settings .clear-chat").remove();
                    var n = t("../templates/chat-settings")(), c = $("<div></div>");
                    c.attr("class", "bttvChatSettings"), c.html(n), $(".ember-chat .chat-interface .chat-settings").append(c), $(".openSettings").click($('body[data-page="ember#chat"]').length ? function (t) {
                        t.preventDefault(), e.settings.popup()
                    } : function (e) {
                        e.preventDefault(), $(".chat-option-buttons .settings").click(), $("#bttvSettingsPanel").show("slow")
                    }), $(".blackChatLink").click(function (e) {
                        if (e.preventDefault(), o.blackChat)o.blackChat = !1, $("#blackChat").remove(), i(), r(), $(".blackChatLink").text("Black Chat (Chroma Key)"); else {
                            o.blackChat = !0, $("#darkTwitch").remove(), $("#splitChat").remove();
                            var t = document.createElement("link");
                            t.setAttribute("href", "https://cdn.betterttv.net/style/stylesheets/betterttv-blackchat.css"), t.setAttribute("type", "text/css"), t.setAttribute("rel", "stylesheet"), t.setAttribute("id", "blackChat"), t.innerHTML = "", $("body").append(t), $(".blackChatLink").text("Unblacken Chat"), $(".ember-chat .chat-room").append('<div class="bttvBlackDeprecationWarning">BTTV Black Chat (Chroma Key) feature is deprecated in favor of <a href="https://nightdev.com/kapchat/" target="_blank">KapChat</a>, and will eventually be removed. <span class="close">(close)</span></div>'), $(".ember-chat .chat-room .bttvBlackDeprecationWarning").one("click", function () {
                                $(".ember-chat .chat-room .bttvBlackDeprecationWarning").remove()
                            })
                        }
                    }), $(".clearChat").click(function (e) {
                        e.preventDefault(), s(".chat-line")
                    }), $(".toggleDarkenTTV").change(function (t) {
                        t.preventDefault(), e.settings.get("darkenedMode") === !0 ? (e.settings.save("darkenedMode", !1), $(this).prop("checked", !1)) : (e.settings.save("darkenedMode", !0), $(this).prop("checked", !0))
                    }), $(".flipDashboard").click(function (t) {
                        t.preventDefault(), e.settings.get("flipDashboard") === !0 ? e.settings.save("flipDashboard", !1) : e.settings.save("flipDashboard", !0)
                    }), $(".setBlacklistKeywords").click(function (t) {
                        t.preventDefault();
                        var n = prompt("Type some blacklist keywords. Messages containing keywords will be filtered from your chat. Use spaces in the field to specify multiple keywords. Place {} around a set of words to form a phrase, and () around a word to specify a username. Wildcards are supported.", e.settings.get("blacklistKeywords"));
                        null !== n && (n = n.trim().replace(/\s\s+/g, " "), e.settings.save("blacklistKeywords", n))
                    }), $(".setHighlightKeywords").click(function (t) {
                        t.preventDefault();
                        var n = prompt("Type some highlight keywords. Messages containing keywords will turn red to get your attention. Use spaces in the field to specify multiple keywords. Place {} around a set of words to form a phrase, and () around a word to specify a username. Wildcards are supported.", e.settings.get("highlightKeywords"));
                        null !== n && (n = n.trim().replace(/\s\s+/g, " "), e.settings.save("highlightKeywords", n))
                    }), $(".setScrollbackAmount").click(function (t) {
                        t.preventDefault();
                        var n = prompt("What is the maximum amount of lines that you want your chat to show? Twitch default is 150. Leave the field blank to disable.", e.settings.get("scrollbackAmount"));
                        null !== n && "" === n ? e.settings.save("scrollbackAmount", 150) : null !== n && isNaN(n) !== !0 && n > 0 && e.settings.save("scrollbackAmount", parseInt(n, 10))
                    }), $(".ember-chat .chat-settings").css("max-height", $(window).height() - 100)
                }
            }
        }, {
            "../helpers/debug": 47,
            "../helpers/element": 48,
            "../templates/chat-settings": 59,
            "../vars": 68,
            "./darken-page": 29,
            "./split-chat": 45
        }],
        21: [function (t, n) {
            var a = t("../helpers/debug"), o = n.exports = function () {
                if (window.App && window.App.__container__) {
                    var t = window.App.__container__.lookup("controller:channel");
                    if (!t || !t.get("model"))return setTimeout(o, 6e4);
                    var n = t.get("model");
                    if (Ember.isEmpty(n))return setTimeout(o, 6e4);
                    var s = n.get("hostModeTarget"), i = s ? s : n;
                    a.log("Check Channel Title/Game"), e.TwitchAPI.get("channels/" + i.id, {}, {version: 3}).done(function (t) {
                        if (t.game && (i.set("rollbackData.game", t.game), i.set("game", t.game)), t.status && (i.set("rollbackData.status", t.status), i.set("status", t.status), !s)) {
                            var n = $("#broadcast-meta .title");
                            n.data("status") !== t.status && (n.data("status", t.status), t.status = t.status.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t.status = e.chat.templates.linkify(t.status), n.find(".real").html(t.status), n.find(".over").html(t.status))
                        }
                        t.views && (i.set("rollbackData.views", t.views), i.set("views", t.views)), t.followers && i.get("followers") && i.get("followers").set("total", t.followers)
                    }).always(function () {
                        setTimeout(o, 6e4 + 5e3 * Math.random())
                    })
                }
            }
        }, {"../helpers/debug": 47}],
        22: [function (t, n) {
            var a = t("../helpers/debug"), o = t("../vars"), s = n.exports = function () {
                if (a.log("Check Following List"), !$("#bttv-small-nav-count").length) {
                    var t = $("<div/>");
                    t.addClass("js-total"), t.attr("id", "bttv-small-nav-count"), t.insertBefore('#small_nav li[data-name="following"] a[href="/directory/following"] .filter_icon:first')
                }
                if (!$("body#chat").length && !$('body[data-page="ember#chat"]').length && o.userData.isLoggedIn) {
                    var n = function (t, a, o, s) {
                        a = a || [], o = o || [], s = s || 0, e.TwitchAPI.get("streams/followed?stream_type=live&limit=100&offset=" + s, {}, {auth: !0}).done(function (e) {
                            return e.streams && e.streams.length ? (e.streams.forEach(function (e) {
                                -1 === o.indexOf(e.channel.name) && (o.push(e.channel.name), a.push(e))
                            }), 100 === e.streams.length ? void n(function (e) {
                                t(e)
                            }, a, o, s + 100) : void t(a)) : t(a)
                        }).fail(function () {
                            t(a)
                        })
                    };
                    n(function (t) {
                        if (t || (t = []), 0 === o.liveChannels.length)o.liveChannels.push("loaded"), t.forEach(function (e) {
                            var t = e.channel;
                            -1 === o.liveChannels.indexOf(t.name) && o.liveChannels.push(t.name)
                        }); else if (t.length > 0) {
                            var n = [];
                            t.forEach(function (t) {
                                var s = t.channel;
                                n.push(s.name), o.userData.isLoggedIn && -1 === o.liveChannels.indexOf(s.name) && e.settings.get("followingNotifications") === !0 && e.TwitchAPI.get("users/" + encodeURIComponent(o.userData.name) + "/follows/channels/" + encodeURIComponent(s.name)).done(function (t) {
                                    t.notifications !== !1 && (a.log(s.name + " is now streaming"), null === s.game && (s.game = "on Twitch"), e.notify(s.display_name + " just started streaming " + s.game + ".\nClick here to head to " + s.display_name + "'s channel.", {
                                        title: s.display_name + " is Now Streaming",
                                        url: s.url,
                                        image: s.logo,
                                        tag: "channel_live_" + s.name,
                                        expires: 6e5
                                    }))
                                })
                            }), o.liveChannels = n
                        }
                        $('#nav_personal li[data-name="following"] a[href="/directory/following"] .js-total').length || $('#nav_personal li[data-name="following"] a[href="/directory/following"]').append('<span class="total_count js-total" style="display: none;"></span>'), $('#left_col li[data-name="following"] a[href="/directory/following"] .js-total').text(t.length), $('#left_col li[data-name="following"] a[href="/directory/following"] .js-total').css("display", "inline"), setTimeout(s, 6e4 + 5e3 * Math.random())
                    })
                }
            }
        }, {"../helpers/debug": 47, "../vars": 68}],
        23: [function (t, n) {
            var a = t("../helpers/debug");
            n.exports = function () {
                if (a.log("Check for New Messages"), !$("body#chat").length) {
                    var t = [], n = ["less than a minute ago", "1 minute ago"], o = function () {
                        e.settings.get("alertOtherMessages") !== !1 && $.get("/messages/other", function (a) {
                            var o = $(a).find("#message-list .unread");
                            o.each(function () {
                                var a = $(this), o = a.children("div.from_to_user"), s = a.children("div.message_data"), i = location.protocol + "//" + location.host + a.data("url"), r = a.data("url").match(/\/message\/show\/([a-z0-9]+)/)[1], c = o.children(".prof").children("img").attr("src"), l = o.children(".capital").text().trim().capitalize(), d = s.children(".time_ago").text().trim();
                                -1 === t.indexOf(i) && -1 !== n.indexOf(d) && (t.push(i), e.notify(l + " just sent you a Message!\nClick here to view it.", {
                                    title: "Twitch Message Received",
                                    url: i,
                                    image: c,
                                    tag: "new_message_" + r
                                }))
                            })
                        })
                    };
                    setInterval(o, 3e4 + 5e3 * Math.random()), o()
                }
            }
        }, {"../helpers/debug": 47}],
        24: [function (t, n) {
            var a = t("../helpers/debug"), o = t("../helpers/element").remove;
            n.exports = function () {
                a.log("Clearing Clutter"), $('li[data-name="kabam"]').attr("style", "display: none !important"), o("#nav_advertisement"), e.settings.get("showFeaturedChannels") !== !0 && (o("#nav_games"), o("#nav_streams"), o("#nav_related_streams"), $("body").append("<style>#nav_games, #nav_streams, #nav_related_streams { display: none; }</style>"))
            }
        }, {"../helpers/debug": 47, "../helpers/element": 48}],
        25: [function (t, n) {
            function a(t) {
                if (t = t || 0, e.settings.get("disableWhispers"))return void $(".conversations-content").hide();
                if (!(this instanceof a))return new a(0);
                var n = $(".conversations-content");
                if (!n.length)return void setTimeout(function () {
                    return new a(2 * t)
                }, 2 * t);
                var o = this, s = new MutationObserver(function (e) {
                    e.forEach(function (e) {
                        for (var t, n, a = e.addedNodes.length, s = 0; a > s; s++) {
                            if (t = e.addedNodes[s], !t.querySelector)return;
                            $(t).hasClass("conversation-window") && o.newConversation(t), o.messageParser(t), n = t.querySelectorAll(".conversation-chat-line");
                            for (var i = 0; i < n.length; i++)o.messageParser(n[i])
                        }
                    })
                });
                s.observe(n[0], {childList: !0, subtree: !0})
            }

            var o = t("../chat/store"), s = t("../chat/templates"), i = t("../chat/helpers"), r = t("../helpers/colors"), c = t("../keycodes"), l = t("../chat/store");
            a.prototype.messageParser = function (e) {
                var t = e.querySelector(".from"), n = e.querySelector(".message");
                if (t && n) {
                    var a = $(e);
                    a.hasClass("bttv-parsed-message") || (a.addClass("bttv-parsed-message"), t.style.color = this.usernameRecolor(t.style.color), this.scrollDownParent(e))
                }
            }, a.prototype.scrollDownParent = function (e) {
                var t = $(e).parents(".conversation-content")[0];
                setTimeout(function () {
                    t && (t.scrollTop = t.scrollHeight)
                }, 500)
            }, a.prototype.emoticonize = function (t) {
                if (e.settings.get("bttvEmotes") === !1)return t;
                for (var n, a, i = t.split(" "), r = 0; r < i.length; r++)n = i[r].replace(/(^[~!@#$%\^&\*\(\)]+|[~!@#$%\^&\*\(\)]+$)/g, ""), a = null, o.bttvEmotes.hasOwnProperty(i[r]) ? a = o.bttvEmotes[i[r]] : o.bttvEmotes.hasOwnProperty(n) && (a = o.bttvEmotes[n]), a && a.urlTemplate && ("png" === a.imageType || "gif" === a.imageType && e.settings.get("bttvGIFEmotes") === !0) && (i[r] = s.bttvEmoticonize(i[r], a));
                return i.join(" ")
            }, a.prototype.usernameRecolor = function (e) {
                var t = e.match(/rgb\(([0-9]+), ([0-9]+), ([0-9]+)\)/);
                return t ? i.calculateColor(r.getHex({r: t[1], g: t[2], b: t[3]})) : e
            }, a.prototype.newConversation = function (t) {
                function n(t) {
                    e.settings.get("chatLineHistory") && (l.whisperHistory[s] ? (-1 !== l.whisperHistory[s].indexOf(t) && l.whisperHistory[s].splice(l.whisperHistory[s].indexOf(t), 1), l.whisperHistory[s].unshift(t)) : l.whisperHistory[s] = [t])
                }

                function a(n) {
                    if (o = $(t).find(".chat_text_input"), e.settings.get("chatLineHistory") && l.whisperHistory[s]) {
                        var a = l.whisperHistory[s].indexOf(o.val().trim());
                        n.keyCode === c.UpArrow ? a >= 0 ? l.whisperHistory[s][a + 1] && o.val(l.whisperHistory[s][a + 1]) : o.val().trim().length ? (l.whisperHistory[s].unshift(o.val().trim()), o.val(l.whisperHistory[s][1])) : o.val(l.whisperHistory[s][0]) : n.keyCode === c.DownArrow && a >= 0 && o.val(l.whisperHistory[s][a - 1] ? l.whisperHistory[s][a - 1] : "")
                    }
                }

                var o = $(t).find(".chat_text_input"), s = $(t).find(".conversation-header-name").text().toLowerCase();
                o.on("keydown", function (t) {
                    if (t.which === c.Enter) {
                        var s = o.val().trim();
                        e.settings.get("chatLineHistory") === !0 && n(s)
                    }
                    a(t)
                }), $(t).find(".send-button").on("click", function () {
                    var t = o.val().trim();
                    e.settings.get("chatLineHistory") === !0 && n(t)
                }), this.addBadges(t)
            }, a.prototype.addBadges = function (e) {
                var t = $(e), n = t.find(".conversation-header-name").text().toLowerCase();
                if (n in l.__badges) {
                    var a = l.__badges[n], o = s.badge("bttv-" + a, "", l.__badgeTypes[a].description);
                    t.find(".badges").prepend(o)
                }
            }, n.exports = a
        }, {
            "../chat/helpers": 5,
            "../chat/store": 8,
            "../chat/templates": 10,
            "../helpers/colors": 46,
            "../keycodes": 52
        }],
        26: [function (t, n) {
            var a = t("../templates/settings-panel");
            n.exports = function () {
                var t = document.createElement("div");
                t.setAttribute("id", "bttvSettingsPanel"), t.style.display = "none", t.innerHTML = a(), $("body").append(t), /\?bttvSettings=true/.test(window.location) && ($("#left_col").remove(), $("#main_col").remove(), $("#right_col").remove(), setTimeout(function () {
                    $("#bttvSettingsPanel").hide(function () {
                        $("#bttvSettingsPanel").show()
                    })
                }, 1e3)), $.get("https://cdn.betterttv.net/privacy.html", function (e) {
                    e && $("#bttvPrivacy .tse-content").html(e)
                }), $.get("https://cdn.betterttv.net/changelog.html?" + e.info.versionString(), function (e) {
                    e && $("#bttvChangelog .tse-content").html(e)
                }), $("#bttvBackupButton").click(function () {
                    e.settings.backup()
                }), $("#bttvImportInput").change(function () {
                    e.settings.import(this)
                }), $("#bttvSettingsPanel .scroll").TrackpadScrollEmulator({scrollbarHideStrategy: "rightAndBottom"}), $("#bttvSettingsPanel #close").click(function () {
                    $("#bttvSettingsPanel").hide("slow")
                }), $("#bttvSettingsPanel .nav a").click(function (e) {
                    e.preventDefault();
                    var t = $(this).attr("href");
                    $("#bttvSettingsPanel .nav a").each(function () {
                        var e = $(this).attr("href");
                        $(e).hide(), $(this).parent("li").removeClass("active")
                    }), "#bttvChannel" === t && $(t).children("iframe").attr("src", "https://manage.betterttv.net/"), $(t).fadeIn(), $(this).parent("li").addClass("active")
                })
            }
        }, {"../templates/settings-panel": 66}],
        27: [function (t, n) {
            function a(t, n) {
                if (e.settings.get(n)) {
                    var a = document.createElement("link");
                    a.setAttribute("href", "https://cdn.betterttv.net/style/stylesheets/betterttv-" + t + ".css?" + e.info.versionString()), a.setAttribute("type", "text/css"), a.setAttribute("rel", "stylesheet"), a.setAttribute("id", n), $("body").append(a)
                }
            }

            function o(e) {
                $("#" + e).remove()
            }

            n.exports.load = a, n.exports.unload = o
        }, {}],
        28: [function (e, t) {
            var n = e("../templates/custom-timeouts"), a = e("../vars"), o = e("../chat/helpers");
            t.exports = function (e, t) {
                if (o.isModerator(a.userData.name)) {
                    $("body").off(".custom-timeouts"), $(".chat-line").removeClass("bttv-user-locate"), $("#bttv-custom-timeout-contain").remove(), $(".ember-chat .chat-room").append(n()), $("#bttv-custom-timeout-contain").css({
                        top: t.offset().top + t.height() / 2 - $("#bttv-custom-timeout-contain").height() / 2,
                        left: $(".ember-chat .chat-room").offset().left - $("#bttv-custom-timeout-contain").width() + $(".ember-chat .chat-room").width() - 20
                    });
                    var s = {type: "cancel", length: 0, text: "CANCEL"};
                    $("body").on("mousemove.custom-timeouts", function (e) {
                        var t = e.pageY - $("#bttv-custom-timeout-contain").offset().top, n = e.pageX - $("#bttv-custom-timeout-contain").offset().left, a = 200 - t, o = Math.floor(60 * Math.pow(1.5, (a - 20) / 7)), i = Math.floor(o / 60) + " Minutes";
                        Math.floor(o / 60 / 60) > 0 && (i = Math.floor(o / 60 / 60) + " Hours"), Math.floor(o / 60 / 60 / 24) > 0 && (i = Math.floor(o / 60 / 60 / 24) + " Days"), a > 0 && 20 >= a && (s = {
                            type: "time",
                            length: 2,
                            text: "PURGE"
                        }), a >= 180 && 200 > a && (s = {
                            type: "ban",
                            length: 0,
                            text: "BAN"
                        }), a > 20 && 180 > a && (s = {
                            type: "time",
                            length: o,
                            text: i
                        }), (a > 200 || 0 > a || n > 80 || 0 > n) && (s = {
                            type: "cancel",
                            length: 0,
                            text: "CANCEL"
                        }), $("#bttv-custom-timeout-contain .text").text(s.text), $("#bttv-custom-timeout-contain .cursor").css("top", t)
                    }), $("body").on("mousedown.custom-timeouts", function (t) {
                        3 === t.which || t.shiftKey || ("ban" === s.type && o.ban(e), "time" === s.type && o.timeout(e, s.length), $("#bttv-custom-timeout-contain").remove(), $("body").off(".custom-timeouts"), $(".chat-line").removeClass("bttv-user-locate"))
                    }), $('.chat-line[data-sender="' + e + '"]').addClass("bttv-user-locate")
                }
            }
        }, {"../chat/helpers": 5, "../templates/custom-timeouts": 61, "../vars": 68}],
        29: [function (t, n) {
            var a = t("../helpers/debug"), o = t("./handle-background");
            n.exports = function () {
                var t = $("body");
                if (setTimeout(o, 1e3), e.settings.get("darkenedMode") === !0 && t.attr("data-page")) {
                    a.log("Darkening Page");
                    var n = $("body").data("page").split("#")[0], s = $("body").data("page").split("#")[1] || "none", i = ["ember", "message", "dashboards", "chat", "chapter", "archive", "channel", "user", "bookmark"];
                    if (-1 !== i.indexOf(n)) {
                        if ("dashboards" === n && "show" !== s || "legal" === s)return;
                        var r = document.createElement("link");
                        r.setAttribute("href", "https://cdn.betterttv.net/style/stylesheets/betterttv-dark.css?" + e.info.versionString()), r.setAttribute("type", "text/css"), r.setAttribute("rel", "stylesheet"), r.setAttribute("id", "darkTwitch"), $("body").append(r), $("#main_col .content #stats_and_actions #channel_stats #channel_viewer_count").css("display", "none"), $('#main_col .messages img[src="http://www-cdn.jtvnw.net/images/xarth/g/g18_trash-00000080.png"]').attr("src", "https://cdn.betterttv.net/style/icons/delete.png"), $('#main_col .messages img[src="http://www-cdn.jtvnw.net/images/xarth/g/g16_trash-00000020.png"]').attr("src", "https://cdn.betterttv.net/style/icons/delete.png").attr("width", "16").attr("height", "16")
                    }
                }
            }
        }, {"../helpers/debug": 47, "./handle-background": 37}],
        30: [function (t, n) {
            var a = t("../helpers/debug"), o = t("../vars");
            n.exports = function s() {
                if ($("#dash_main").length) {
                    if (a.log("Updating Dashboard Channel Info"), e.TwitchAPI.get("streams/" + e.getChannel()).done(function (e) {
                            e.stream ? ($("#channel_viewer_count").text(Twitch.display.commatize(e.stream.viewers)), e.stream.channel.views && $("#views_count span").text(Twitch.display.commatize(e.stream.channel.views)), e.stream.channel.followers && $("#followers_count span").text(Twitch.display.commatize(e.stream.channel.followers))) : $("#channel_viewer_count").text("Offline")
                        }), e.TwitchAPI.get("channels/" + e.getChannel() + "/follows?limit=1").done(function (e) {
                            e._total && $("#followers_count span").text(Twitch.display.commatize(e._total))
                        }), !$("#chatters_count").length) {
                        var t = $("<div/>"), n = $("<span/>");
                        t.attr("class", "stat"), t.attr("id", "chatters_count"), n.text("0"), n.attr("tooltipdata", "Chatters"), t.append(n), $("#followers_count").after(t)
                    }
                    $.getJSON("https://tmi.twitch.tv/group/user/" + e.getChannel() + "/chatters?callback=?", function (e) {
                        e.data && e.data.chatter_count && $("#chatters_count span").text(Twitch.display.commatize(e.data.chatter_count))
                    }), o.dontCheckSubs !== !0 && $.get("/broadcast/dashboard/partnership", function (t) {
                        var n = $(t).find("div.wrapper"), s = /Your channel currently has ([0-9,]+) paying subscribers and ([0-9,]+) total active subscribers/;
                        if (n) {
                            var i = n.text();
                            if (i.match(s)) {
                                var r = s.exec(i), c = r[2];
                                if (!$("#subs_count").length) {
                                    n = $("<div/>");
                                    var l = $("<span/>");
                                    n.attr("class", "stat"), n.attr("id", "subs_count"), l.text("0"), l.attr("tooltipdata", "Active Subscribers"), n.append(l), $("#chatters_count").after(n), e.TwitchAPI.get("chat/" + e.getChannel() + "/badges").done(function (e) {
                                        e.subscriber && $("#subs_count").css("background-image", "url(" + e.subscriber.image + ")")
                                    })
                                }
                                $("#subs_count span").text(Twitch.display.commatize(c))
                            } else o.dontCheckSubs = !0, a.log("Dashboard Info -> Channel doesn't have subscribers.")
                        } else a.warn("Dashboard Info -> Error loading partnership page.")
                    }), setTimeout(s, 6e4 + 5e3 * Math.random())
                }
            }
        }, {"../helpers/debug": 47, "../vars": 68}],
        31: [function (t, n) {
            var a = t("../helpers/debug"), o = t("../vars");
            n.exports = function () {
                e.settings.get("showDirectoryLiveTab") === !0 && $('h2.title:contains("Following")').length && $('a.active:contains("Overview")').length && (a.log("Changing Directory View"), $('a[href="/directory/following/live"]').click()), o.watchScroll || (o.watchScroll = $("#main_col .tse-scroll-content").scroll(function () {
                    var e = $("#main_col .tse-scroll-content")[0].scrollHeight - $("#main_col .tse-scroll-content").height(), t = $("#main_col .tse-scroll-content").scrollTop(), n = e - t;
                    if (251 > n) {
                        if ($("#directory-list a.list_more .spinner").length)return;
                        $("#directory-list a.list_more").click()
                    }
                }))
            }
        }, {"../helpers/debug": 47, "../vars": 68}],
        32: [function (t, n) {
            var a = t("../templates/embedded-poll"), o = t("../chat/helpers"), s = null, i = null;
            n.exports = function (t) {
                var n = /strawpoll\.me\/([0-9]+)/g.exec(t.message);
                if (e.settings.get("embeddedPolling") && n && o.isModerator(t.from)) {
                    var r = n[1], c = $("#bttv-poll-contain");
                    c.length && r === i || c.length && c.children(".frame").is(":visible") || (c.length && c.remove(), $(".ember-chat .chat-room").append(a({pollId: r})), c = $("#bttv-poll-contain"), null !== s && clearTimeout(s), s = setTimeout(function () {
                        c && !c.children(".frame").is(":visible") && c.remove()
                    }, 3e4), c.children(".close").on("click", function () {
                        c.remove()
                    }), c.children(".title").on("click", function () {
                        c.children(".frame").show(), c.children(".title").text("Thanks!"), c.css("height", "450px")
                    }), c.slideDown(200), i = r)
                }
            }
        }, {"../chat/helpers": 5, "../templates/embedded-poll": 62}],
        33: [function (e, t) {
            t.exports = function () {
                if ("oncopy"in document) {
                    var e = function (t) {
                        if (!t.clipboardData || !t.clipboardData.setData)return void document.removeEventListener("copy", e);
                        var n = "img.emoticon", a = function (e, t) {
                            var n = decodeURIComponent($(t).data("regex"));
                            $(t).after(n).remove()
                        }, o = $(window.getSelection().getRangeAt(0).cloneContents());
                        (o.children().is(n) || o.children().find(n).length) && (o.children().filter(n).each(a), o.children().find(n).each(a), o = o.text().replace(/\s+/g, " ").trim(), t.clipboardData.setData("text/plain", o), t.preventDefault())
                    };
                    document.addEventListener("copy", e)
                }
            }
        }, {}],
        34: [function (t, n) {
            var a = t("../helpers/debug");
            n.exports = function () {
                $("#dash_main").length && (e.settings.get("flipDashboard") === !0 ? (a.log("Flipping Dashboard"), $("#dash_main .dash-chat-column").css({
                    "float": "left",
                    right: "initial"
                }), $("#dash_main #controls_column").css({
                    "float": "right",
                    left: "20px"
                })) : ($("#dash_main .dash-chat-column").css({
                    "float": "none",
                    right: "0px"
                }), $("#dash_main #controls_column").css({"float": "left", left: "0px"})))
            }
        }, {"../helpers/debug": 47}],
        35: [function (e, t) {
            var n = e("../helpers/debug");
            t.exports = function () {
                $("#dash_main").length && (n.log("Formatting Dashboard"), $("#dash_main #controls_column .dash-hostmode-contain").appendTo("#dash_main #controls_column"), $("#dash_main #controls_column .dash-player-contain").appendTo("#dash_main #controls_column"), $("#dash_main #commercial_buttons").appendTo("#dash_main .dash-broadcast-contain"), $("#commercial_options .dropmenu_action[data-length=150]").text("2m 30s"), $("#controls_column #form_submit button").attr("class", "primary_button"))
            }
        }, {"../helpers/debug": 47}],
        36: [function (t, n) {
            var a = t("../helpers/debug");
            n.exports = function () {
                $("#dash_main").length && (a.log("Giveaway Plugin Dashboard Compatibility"), $(".tga_modal").appendTo("#bttvDashboard"), $(".tga_button").click(function () {
                    e.settings.get("flipDashboard") === !0 ? ($("#chat").width("330px"), $(".tga_modal").css("right", "0px")) : ($("#chat").width("330px"), $(".tga_modal").css("right", "inherit"))
                }), $('button[data-action="close"]').click(function () {
                    $("#chat").width("500px")
                }))
            }
        }, {"../helpers/debug": 47}],
        37: [function (t, n) {
            n.exports = function a(t) {
                t = t || !1;
                var n = "custom-bg";
                if (0 === $("#" + n).length) {
                    var o = $("<canvas />");
                    o.attr("id", n), $("#channel").prepend(o)
                }
                if (window.App && App.__container__.lookup("controller:Channel") && App.__container__.lookup("controller:Channel").get("content.panels")) {
                    if (App.__container__.lookup("controller:Channel").get("content.panels.content").forEach(function (e) {
                            var t = e.get("data").link, a = /^https?:\/\/cdn.betterttv.net\//;
                            if (t && -1 !== t.indexOf("#BTTV#")) {
                                for (var o = {}, s = t.split("#BTTV#")[1], i = s.split("="), r = 0; r < i.length; r += 2)i[r + 1] && a.test(i[r + 1]) && (o[i[r]] = i[r + 1]);
                                o.bg && $("#" + n).attr("image", o.bg)
                            }
                        }), t)$("#" + n).addClass("tiled"); else if ($("#" + n).attr("image")) {
                        var s = new Image;
                        s.onload = function () {
                            s.naturalWidth < $("#main_col").width() && setTimeout(function () {
                                a(!0)
                            }, 2e3)
                        }, s.src = $("#" + n).attr("image")
                    }
                    var i = $("#" + n), r = i[0];
                    if (r && r.getContext) {
                        var c = r.getContext("2d"), l = $("#" + n).attr("image");
                        if (l)if (i.css({
                                width: "100%",
                                "background-position": "center top"
                            }), i.hasClass("tiled"))i.css({"background-image": "url(" + l + ")"}).attr("width", 200).attr("height", 200), r = c.createLinearGradient(0, 0, 0, 200), e.settings.get("darkenedMode") === !0 ? (r.addColorStop(0, "rgba(20,20,20,0.4)"), r.addColorStop(1, "rgba(20,20,20,1)")) : (r.addColorStop(0, "rgba(245,245,245,0.65)"), r.addColorStop(1, "rgba(245,245,245,1)")), c.fillStyle = r, c.fillRect(0, 0, 200, 200); else {
                            var d = document.createElement("IMG");
                            d.onload = function () {
                                var t = this.width;
                                r = this.height, i.attr("width", t).attr("height", r), c.drawImage(d, 0, 0), e.settings.get("darkenedMode") === !0 ? r > t ? (l = c.createLinearGradient(0, 0, 0, t), l.addColorStop(0, "rgba(20,20,20,0.4)"), l.addColorStop(1, "rgba(20,20,20,1)"), c.fillStyle = l, c.fillRect(0, 0, t, t), c.fillStyle = "rgb(20,20,20)", c.fillRect(0, t, t, r - t)) : (l = c.createLinearGradient(0, 0, 0, r), l.addColorStop(0, "rgba(20,20,20,0.4)"), l.addColorStop(1, "rgba(20,20,20,1)"), c.fillStyle = l, c.fillRect(0, 0, t, r)) : r > t ? (l = c.createLinearGradient(0, 0, 0, t), l.addColorStop(0, "rgba(245,245,245,0.65)"), l.addColorStop(1, "rgba(245,245,245,1)"), c.fillStyle = l, c.fillRect(0, 0, t, t), c.fillStyle = "rgb(245,245,245)", c.fillRect(0, t, t, r - t)) : (l = c.createLinearGradient(0, 0, 0, r), l.addColorStop(0, "rgba(245,245,245,0.65)"), l.addColorStop(1, "rgba(245,245,245,1)"), c.fillStyle = l, c.fillRect(0, 0, t, r))
                            }, d.src = l
                        } else $(r).css("background-image", ""), c.clearRect(0, 0, r.width, r.height)
                    }
                }
            }
        }, {}],
        38: [function (t, n) {
            var a = t("../helpers/debug");
            n.exports = function () {
                if (e.settings.get("clickTwitchEmotes") === !0) {
                    a.log("Injecting Twitch Chat Emotes Script");
                    var t = document.createElement("script");
                    t.setAttribute("src", "https://cdn.betterttv.net/js/twitchemotes.js?" + e.info.versionString()), t.setAttribute("type", "text/javascript"), t.setAttribute("id", "clickTwitchEmotes"), $("body").append(t)
                }
                var n = 0, o = setInterval(function () {
                    return n++, n > 29 ? void clearInterval(o) : void(window.emoteMenu && (clearInterval(o), a.log("Hooking into Twitch Chat Emotes Script"), window.emoteMenu.registerEmoteGetter("BetterTTV", e.chat.emotes)))
                }, 1e3)
            }
        }, {"../helpers/debug": 47}],
        39: [function (t, n) {
            var a = t("../vars");
            n.exports = function () {
                if (e.settings.get("hostButton") === !0 && a.userData.isLoggedIn) {
                    var t = e.chat, n = t.tmi();
                    if (n) {
                        var o = t.helpers, s = n.tmiSession ? n.tmiSession.userId : 0, i = n.tmiRoom ? n.tmiRoom.ownerId : 0;
                        if (n.tmiSession && n.tmiSession._tmiApi) {
                            var r = $("#bttv-host-button");
                            r.length || (r = $("<span><span></span></span>"), r.addClass("button").addClass("action"), r.attr("id", "bttv-host-button"), r.insertBefore("#channel .channel-actions .theatre-button"), r.click(function () {
                                var t = r.text();
                                if ("Unhost" === t)try {
                                    n.tmiSession._connections.prod._send("PRIVMSG #" + a.userData.name + " :/unhost"), o.serverMessage("BetterTTV: We sent a /unhost to your channel."), r.children("span").text("Host")
                                } catch (s) {
                                    o.serverMessage("BetterTTV: There was an error unhosting the channel. You may need to unhost it from your channel.")
                                } else try {
                                    n.tmiSession._connections.prod._send("PRIVMSG #" + a.userData.name + " :/host " + e.getChannel()), o.serverMessage("BetterTTV: We sent a /host to your channel. Please note you can only host 3 times per 30 minutes."), r.children("span").text("Unhost")
                                } catch (s) {
                                    o.serverMessage("BetterTTV: There was an error hosting the channel. You may need to host it from your channel.")
                                }
                            })), n.tmiSession._tmiApi.get("/hosts", {host: s}).then(function (e) {
                                e.hosts && e.hosts.length && r.children("span").text(e.hosts[0].target_id === i ? "Unhost" : "Host")
                            })
                        }
                    }
                }
            }
        }, {"../vars": 68}],
        40: [function (e, t, n) {
            n.enablePreview = function () {
                $(document).on({
                    mouseenter: function () {
                        var e = this.href;
                        $(this).tipsy({
                            trigger: "manual", gravity: $.fn.tipsy.autoNS, html: !0, title: function () {
                                return '<iframe id="chat_preview" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" width="200px" scrolling="no" src="https://api.betterttv.net/2/image_embed/' + encodeURIComponent(e) + '"></iframe>'
                            }
                        }), $(this).tipsy("show")
                    }, mouseleave: function () {
                        $(this).tipsy("hide"), $("div.tipsy").remove()
                    }
                }, "a.chat-preview")
            }, n.disablePreview = function () {
                $(document).off("mouseenter mouseleave mousemove", "a.chat-preview")
            }
        }, {}],
        41: [function (t, n, a) {
            var o = t("../vars"), s = t("../helpers/debug"), i = t("../helpers/regex").escapeRegExp;
            a.blacklistFilter = function (t) {
                var n, a = [], r = [], c = e.settings.get("blacklistKeywords"), l = /\{.+?\}/g;
                try {
                    n = c.match(l)
                } catch (d) {
                    return s.log(d), !1
                }
                var h;
                if (n)for (h = 0; h < n.length; h++) {
                    var u = n[h];
                    c = c.replace(u, "").replace(/\s\s+/g, " ").trim(), a.push(u.replace(/(^\{|\}$)/g, "").trim())
                }
                for ("" !== c && (c = c.split(" "), c.forEach(function (e) {
                    /^\([a-z0-9_\-\*]+\)$/i.test(e) ? r.push(e.replace(/(\(|\))/g, "")) : a.push(e)
                })), h = 0; h < a.length; h++) {
                    var g = i(a[h]).replace(/\*/g, "[^ ]*"), p = new RegExp(g, "i");
                    if (p.test(t.message) && o.userData.name !== t.from)return !0
                }
                for (h = 0; h < r.length; h++) {
                    var m = i(r[h]).replace(/\*/g, "[^ ]*"), f = new RegExp("^" + m + "$", "i");
                    if (f.test(t.from))return !0
                }
                return !1
            }, a.highlighting = function (n) {
                var a, r = t("../features/audible-feedback"), c = [], l = [], d = e.settings.get("highlightKeywords"), h = /\{.+?\}/g;
                try {
                    a = d.match(h)
                } catch (u) {
                    return s.log(u), !1
                }
                var g;
                if (a)for (g = 0; g < a.length; g++) {
                    var p = a[g];
                    d = d.replace(p, "").replace(/\s\s+/g, " ").trim(), c.push(p.replace(/(^\{|\}$)/g, "").trim())
                }
                for ("" !== d && (d = d.split(" "), d.forEach(function (e) {
                    /^\([a-z0-9_\-\*]+\)$/i.test(e) ? l.push(e.replace(/(\(|\))/g, "")) : c.push(e)
                })), g = 0; g < c.length; g++) {
                    var m = i(c[g]).replace(/\*/g, "[^ ]*"), f = new RegExp("(\\s|^|@)" + m + "([!.,:';?/]|\\s|$)", "i");
                    if (o.userData.isLoggedIn && o.userData.name !== n.from && f.test(n.message))return e.settings.get("desktopNotifications") === !0 && e.chat.store.activeView === !1 && (e.notify("You were mentioned in " + e.chat.helpers.lookupDisplayName(e.getChannel()) + "'s channel."), r()), !0
                }
                for (g = 0; g < l.length; g++) {
                    var v = i(l[g]).replace(/\*/g, "[^ ]*"), b = new RegExp("^" + v + "$", "i");
                    if (b.test(n.from))return !0
                }
                return !1
            }
        }, {"../features/audible-feedback": 14, "../helpers/debug": 47, "../helpers/regex": 51, "../vars": 68}],
        42: [function (t, n) {
            n.exports = function (t, n) {
                t.messages = $.makeArray($('.chat-room .chat-messages .chat-line[data-sender="' + t.name + '"]')).reverse();
                var a = e.chat.templates.moderationCard(t, n.offset().top, $(".chat-lines").offset().left);
                $(".ember-chat .moderation-card").remove(), $(".ember-chat").append(a);
                var o = $('.ember-chat .moderation-card[data-user="' + t.name + '"]');
                o.find(".close-button").click(function () {
                    o.remove()
                }), o.find(".user-messages .label").click(function () {
                    o.find(".user-messages .chat-messages").toggle("fast");
                    var e = $(this).find(".triangle");
                    e.hasClass("open") ? e.removeClass("open").addClass("closed") : e.removeClass("closed").addClass("open")
                }), o.find(".permit").click(function () {
                    e.chat.helpers.sendMessage("!permit " + t.name), o.remove(), $("div.tipsy").remove()
                }), o.find(".timeout").click(function () {
                    e.chat.helpers.timeout(t.name, $(this).data("time")), o.remove(), $("div.tipsy").remove()
                }), o.find(".ban").click(function () {
                    e.chat.helpers.ban(t.name), o.remove(), $("div.tipsy").remove()
                }), o.find(".mod-card-profile").click(function () {
                    window.open(Twitch.url.profile(t.name), "_blank")
                }), o.find(".mod-card-message").click(function () {
                    window.open(Twitch.url.compose(t.name), "_blank")
                }), o.find(".mod-card-edit").click(function () {
                    var n = prompt("Enter the new nickname for " + t.display_name + ". (Leave blank to reset...)");
                    if (null !== n)if (n.length) {
                        if (n = n.trim(), !n.length)return;
                        e.storage.pushObject("nicknames", t.name, n), o.find("h3.name a").text(n), $('.chat-line[data-sender="' + t.name + '"] .from').text(n)
                    } else e.storage.spliceObject("nicknames", t.name), o.find("h3.name a").text(t.display_name), $('.chat-line[data-sender="' + t.name + '"] .from').text(t.display_name)
                }), e.chat.helpers.isIgnored(t.name) && (o.find(".mod-card-ignore .svg-ignore").hide(), o.find(".mod-card-ignore .svg-unignore").show()), o.find(".mod-card-ignore").click(function () {
                    "none" !== o.find(".mod-card-ignore .svg-unignore").css("display") ? (e.chat.helpers.sendMessage("/unignore " + t.name), o.find(".mod-card-ignore .svg-ignore").show(), o.find(".mod-card-ignore .svg-unignore").hide()) : (e.chat.helpers.sendMessage("/ignore " + t.name), o.find(".mod-card-ignore .svg-ignore").hide(), o.find(".mod-card-ignore .svg-unignore").show())
                }), e.chat.helpers.isModerator(t.name) && (o.find(".mod-card-mod .svg-add-mod").hide(), o.find(".mod-card-mod .svg-remove-mod").show()), o.find(".mod-card-mod").click(function () {
                    "none" !== o.find(".mod-card-mod .svg-remove-mod").css("display") ? (e.chat.helpers.sendMessage("/unmod " + t.name), o.find(".mod-card-mod .svg-add-mod").show(), o.find(".mod-card-mod .svg-remove-mod").hide()) : (e.chat.helpers.sendMessage("/mod " + t.name), o.find(".mod-card-mod .svg-add-mod").hide(), o.find(".mod-card-mod .svg-remove-mod").show())
                }), e.TwitchAPI.get("users/:login/follows/channels/" + t.name).done(function () {
                    o.find(".mod-card-follow").text("Unfollow")
                }).fail(function () {
                    o.find(".mod-card-follow").text("Follow")
                }), o.find(".mod-card-follow").text("Unfollow").click(function () {
                    "Unfollow" === o.find(".mod-card-follow").text() ? (e.TwitchAPI.del("users/:login/follows/channels/" + t.name).done(function () {
                        e.chat.helpers.serverMessage("User was unfollowed successfully.", !0)
                    }).fail(function () {
                        e.chat.helpers.serverMessage("There was an error following this user.", !0)
                    }), o.find(".mod-card-follow").text("Follow")) : (e.TwitchAPI.put("users/:login/follows/channels/" + t.name).done(function () {
                        e.chat.helpers.serverMessage("User was followed successfully.", !0)
                    }).fail(function () {
                        e.chat.helpers.serverMessage("There was an error following this user.", !0)
                    }), o.find(".mod-card-follow").text("Unfollow"))
                }), o.drags({
                    handle: ".drag-handle",
                    el: o
                }), $('.chat-line[data-sender="' + t.name + '"]').addClass("bttv-user-locate"), o.on("remove", function () {
                    $('.chat-line[data-sender="' + t.name + '"]').removeClass("bttv-user-locate")
                })
            }
        }, {}],
        43: [function (t, n) {
            var a = t("../helpers/debug"), o = t("../vars");
            n.exports = function () {
                if (!o.emotesLoaded) {
                    a.log("Loading BetterTTV Emoticons");
                    var t = function (t) {
                        o.emotesLoaded = !0, t.emotes.forEach(function (n) {
                            n.urlTemplate = t.urlTemplate.replace("{{id}}", n.id), n.url = n.urlTemplate.replace("{{image}}", "1x"), e.chat.store.bttvEmotes[n.code] = n
                        }), $("body").on("mouseover", ".chat-line .emoticon", function () {
                            o.hoveringEmote = $(this), $(this).tipsy({
                                trigger: "manual",
                                gravity: "se",
                                live: !1,
                                html: !0,
                                fallback: function () {
                                    var t = o.hoveringEmote;
                                    if (t && t.data("regex")) {
                                        var n = decodeURIComponent(t.data("regex"));
                                        return e.TwitchEmoteIDToChannel && t.data("id") && e.TwitchEmoteIDToChannel[t.data("id")] ? "Emote: " + n + "<br />Channel: " + e.TwitchEmoteIDToChannel[t.data("id")] : t.data("channel") && "BetterTTV Emotes" === t.data("channel") ? "Emote: " + n + "<br />BetterTTV Emoticon" : t.data("channel") ? "Emote: " + n + "<br />Channel: " + t.data("channel") : n
                                    }
                                    return "Kappab"
                                }
                            }), $(this).tipsy("show");
                            var t = $(this);
                            e.TwitchEmoteIDToChannel && t.data("id") && e.TwitchEmoteIDToChannel[t.data("id")] ? $(this).css("cursor", "pointer") : t.data("channel") && $(this).css("cursor", "pointer")
                        }).on("mouseout", ".chat-line .emoticon", function () {
                            $(this).tipsy("hide");
                            var t = $(this);
                            e.TwitchEmoteIDToChannel && t.data("id") && e.TwitchEmoteIDToChannel[t.data("id")] ? $(this).css("cursor", "normal") : t.data("channel") && $(this).css("cursor", "normal"), $("div.tipsy").remove()
                        }).on("click", ".chat-line .emoticon", function () {
                            var t = $(this);
                            t.data("channel") && "BetterTTV Emotes" === t.data("channel") || (e.TwitchEmoteIDToChannel && t.data("id") && e.TwitchEmoteIDToChannel[t.data("id")] ? window.open("http://www.twitch.tv/" + e.TwitchEmoteIDToChannel[t.data("id")], "_blank") : t.data("channel") && window.open("http://www.twitch.tv/" + $(this).data("channel"), "_blank"))
                        })
                    };
                    $.getJSON("https://api.betterttv.net/2/emotes/ids").done(function (t) {
                        e.TwitchEmoteIDToChannel = t.ids
                    }), $.getJSON("https://api.betterttv.net/2/emotes/sets").done(function (t) {
                        e.TwitchEmoteSets = t.sets
                    }), $.getJSON("https://api.betterttv.net/2/emotes").done(function (e) {
                        t(e)
                    })
                }
            }
        }, {"../helpers/debug": 47, "../vars": 68}],
        44: [function (t, n) {
            var a = t("../templates/pinned-highlight"), o = 10;
            n.exports = function (t) {
                if (e.settings.get("pinnedHighlights")) {
                    var n = $("#bttv-pin-container");
                    n.length || (n = $('<div id="bttv-pin-container">').appendTo($(".ember-chat .chat-room")));
                    var s = t.date.toLocaleTimeString().replace(/^(\d{0,2}):(\d{0,2}):(.*)$/i, "$1:$2"), i = $(a({
                        time: s,
                        displayName: t.tags["display-name"] || t.from,
                        message: t.message
                    }));
                    n.children().length + 1 > o && n.children().first().remove(), i.children(".close").on("click", function () {
                        i.remove()
                    }), n.append(i), e.settings.get("timeoutHighlights") && setTimeout(function () {
                        i.remove()
                    }, 6e4)
                }
            }
        }, {"../templates/pinned-highlight": 64}],
        45: [function (t, n) {
            var a = t("../helpers/debug");
            n.exports = function () {
                if (e.settings.get("splitChat") !== !1) {
                    a.log("Splitting Chat");
                    var t = document.createElement("link");
                    e.settings.get("darkenedMode") === !0 ? t.setAttribute("href", "https://cdn.betterttv.net/style/stylesheets/betterttv-split-chat-dark.css") : t.setAttribute("href", "https://cdn.betterttv.net/style/stylesheets/betterttv-split-chat.css"), t.setAttribute("type", "text/css"), t.setAttribute("rel", "stylesheet"), t.setAttribute("id", "splitChat"), $("body").append(t)
                }
            }
        }, {"../helpers/debug": 47}],
        46: [function (e, t, n) {
            var a = n.rgbToHsl = function (e, t, n) {
                e /= 255, t /= 255, n /= 255;
                var a, o, s = Math.max(e, t, n), i = Math.min(e, t, n), r = Math.min(Math.max(0, (s + i) / 2), 1), c = Math.min(Math.max(0, s - i), 1);
                if (0 === c)a = o = c; else {
                    switch (o = r > .5 ? c / (2 * (1 - r)) : c / (2 * r), o = Math.min(Math.max(0, o), 1), s) {
                        case e:
                            a = Math.min(Math.max(0, (t - n) / c + (n > t ? 6 : 0)), 6);
                            break;
                        case t:
                            a = Math.min(Math.max(0, (n - e) / c + 2), 6);
                            break;
                        case n:
                            a = Math.min(Math.max(0, (e - t) / c + 4), 6)
                    }
                    a /= 6
                }
                return [a, o, r]
            }, o = n.hslToRgb = function (e, t, n) {
                var a, o, s, i, r, c;
                return 0 === t ? a = o = s = Math.round(Math.min(Math.max(0, 255 * n), 255)) : (i = function (e, t, n) {
                    return 0 > n && (n += 1), n > 1 && (n -= 1), 1 / 6 > n ? e + 6 * (t - e) * n : .5 > n ? t : 2 / 3 > n ? e + (t - e) * (2 / 3 - n) * 6 : e
                }, r = .5 > n ? n * (1 + t) : n + t - n * t, c = 2 * n - r, a = Math.round(Math.min(Math.max(0, 255 * i(c, r, e + 1 / 3)), 255)), o = Math.round(Math.min(Math.max(0, 255 * i(c, r, e)), 255)), s = Math.round(Math.min(Math.max(0, 255 * i(c, r, e - 1 / 3)), 255))), [a, o, s]
            };
            n.calculateColorBackground = function (e) {
                e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                var t = parseInt(e.substr(0, 2), 16), n = parseInt(e.substr(2, 2), 16), a = parseInt(e.substr(4, 2), 16), o = (299 * t + 587 * n + 114 * a) / 1e3;
                return o >= 128 ? "dark" : "light"
            }, n.calculateColorReplacement = function (e, t) {
                var n, s, i, r, c, l, d = "light" === t, h = d ? .1 : -.1;
                return e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), i = parseInt(e.substr(0, 2), 16), r = parseInt(e.substr(2, 2), 16), c = parseInt(e.substr(4, 2), 16), s = a(i, r, c), l = d ? 1 - (1 - h) * (1 - s[2]) : (1 + h) * s[2], l = Math.min(Math.max(0, l), 1), n = o(s[0], s[1], l), i = n[0].toString(16), r = n[1].toString(16), c = n[2].toString(16), "#" + ("00" + i).substr(i.length) + ("00" + r).substr(r.length) + ("00" + c).substr(c.length)
            }, n.getRgb = function (e) {
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? {r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16)} : {r: 0, g: 0, b: 0}
            }, n.getHex = function (e) {
                var t = function (e) {
                    return ("0" + parseInt(e, 10).toString(16)).slice(-2)
                };
                return "#" + t(e.r) + t(e.g) + t(e.b)
            }
        }, {}],
        47: [function (t, n) {
            n.exports = {
                log: function () {
                    if (window.console && console.log && !e.settings.get("consoleLog") != !0) {
                        var t = Array.prototype.slice.call(arguments);
                        console.log.apply(console.log, ["BTTV:"].concat(t))
                    }
                }
            }
        }, {}],
        48: [function (e, t, n) {
            n.remove = function (e) {
                $(e).each(function () {
                    $(this).hide()
                })
            }, n.display = function (e) {
                $(e).each(function () {
                    $(this).show()
                })
            }
        }, {}],
        49: [function (e, t) {
            var n = n || function (e) {
                    "use strict";
                    if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
                        var t = e.document, n = function () {
                            return e.URL || e.webkitURL || e
                        }, a = t.createElementNS("http://www.w3.org/1999/xhtml", "a"), o = "download"in a, s = function (n) {
                            var a = t.createEvent("MouseEvents");
                            a.initMouseEvent("click", !0, !1, e, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(a)
                        }, i = e.webkitRequestFileSystem, r = e.requestFileSystem || i || e.mozRequestFileSystem, c = function (t) {
                            (e.setImmediate || e.setTimeout)(function () {
                                throw t
                            }, 0)
                        }, l = "application/octet-stream", d = 0, h = 500, u = function (t) {
                            var a = function () {
                                "string" == typeof t ? n().revokeObjectURL(t) : t.remove()
                            };
                            e.chrome ? a() : setTimeout(a, h)
                        }, g = function (e, t, n) {
                            t = [].concat(t);
                            for (var a = t.length; a--;) {
                                var o = e["on" + t[a]];
                                if ("function" == typeof o)try {
                                    o.call(e, n || e)
                                } catch (s) {
                                    c(s)
                                }
                            }
                        }, p = function (e) {
                            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["ï»¿", e], {type: e.type}) : e
                        }, m = function (t, c) {
                            t = p(t);
                            var h, m, f, v = this, b = t.type, y = !1, w = function () {
                                g(v, "writestart progress write writeend".split(" "))
                            }, _ = function () {
                                if ((y || !h) && (h = n().createObjectURL(t)), m)m.location.href = h; else {
                                    var a = e.open(h, "_blank");
                                    void 0 === a && "undefined" != typeof safari && (e.location.href = h)
                                }
                                v.readyState = v.DONE, w(), u(h)
                            }, C = function (e) {
                                return function () {
                                    return v.readyState !== v.DONE ? e.apply(this, arguments) : void 0
                                }
                            }, k = {create: !0, exclusive: !1};
                            return v.readyState = v.INIT, c || (c = "download"), o ? (h = n().createObjectURL(t), a.href = h, a.download = c, s(a), v.readyState = v.DONE, w(), void u(h)) : (e.chrome && b && b !== l && (f = t.slice || t.webkitSlice, t = f.call(t, 0, t.size, l), y = !0), i && "download" !== c && (c += ".download"), (b === l || i) && (m = e), r ? (d += t.size, void r(e.TEMPORARY, d, C(function (e) {
                                e.root.getDirectory("saved", k, C(function (e) {
                                    var n = function () {
                                        e.getFile(c, k, C(function (e) {
                                            e.createWriter(C(function (n) {
                                                n.onwriteend = function (t) {
                                                    m.location.href = e.toURL(), v.readyState = v.DONE, g(v, "writeend", t), u(e)
                                                }, n.onerror = function () {
                                                    var e = n.error;
                                                    e.code !== e.ABORT_ERR && _()
                                                }, "writestart progress write abort".split(" ").forEach(function (e) {
                                                    n["on" + e] = v["on" + e]
                                                }), n.write(t), v.abort = function () {
                                                    n.abort(), v.readyState = v.DONE
                                                }, v.readyState = v.WRITING
                                            }), _)
                                        }), _)
                                    };
                                    e.getFile(c, {create: !1}, C(function (e) {
                                        e.remove(), n()
                                    }), C(function (e) {
                                        e.code === e.NOT_FOUND_ERR ? n() : _()
                                    }))
                                }), _)
                            }), _)) : void _())
                        }, f = m.prototype, v = function (e, t) {
                            return new m(e, t)
                        };
                        return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (e, t) {
                            return navigator.msSaveOrOpenBlob(p(e), t)
                        } : (f.abort = function () {
                            var e = this;
                            e.readyState = e.DONE, g(e, "abort")
                        }, f.readyState = f.INIT = 0, f.WRITING = 1, f.DONE = 2, f.error = f.onwritestart = f.onprogress = f.onwrite = f.onabort = f.onerror = f.onwriteend = null, v)
                    }
                }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
            "undefined" != typeof t && t.exports ? t.exports.saveAs = n : "undefined" != typeof define && null !== define && null != define.amd && define([], function () {
                return n
            })
        }, {}],
        50: [function (e, t) {
            function n() {
                try {
                    return !!window.opener
                } catch (e) {
                    return !0
                }
            }

            function a() {
                return n() && /\?bttvMassUnban=true/.test(window.location) ? this.sender() : (this.events = new o, void(this._popupWindow = null))
            }

            var o = e("events").EventEmitter;
            a.prototype._receivedMessage = function (e) {
                if (e.data && "string" == typeof e.data) {
                    var t = e.data.split(" ");
                    "bttv_massunban_users" === t[0] && (t.shift(), this.events.emit("bannedUsers", t))
                }
            }, a.prototype.sender = function () {
                var e = $("#banned_chatter_list");
                if (e.length) {
                    $terribleNotice = $("<div/>"), $terribleNotice.html("<h1>Mass Unban Running..</h1><br><br>Hi. Due to recent Twitch changes we now have a really terrible way of mass unbanning users. Leave this window open and it will refresh on its own until it closes on its own when the mass unban is finished."), $terribleNotice.attr("style", "background-color: #fff;z-index:90001;padding-left:10px;padding-right:10px;position:absolute;top:0px;bottom:0px;left:0px;right:0px;"), $("body").append($terribleNotice);
                    var t = function (e) {
                        e.data && "string" == typeof e.data && "bttv_massunban_reload" === e.data.split(" ")[0] && window.location.reload(!0)
                    };
                    window.addEventListener("message", t, !1);
                    var n = [];
                    e.find(".ban .obj").each(function () {
                        var e = $(this).text().trim();
                        -1 === n.indexOf(e) && n.push(e)
                    });
                    var a = n.length;
                    n.unshift("bttv_massunban_users"), window.opener.postMessage(n.join(" "), "http://www.twitch.tv"), 0 === a && window.close()
                }
            }, a.prototype.receiver = function () {
                var e = 480, t = 600, n = $(window).width() / 2 - e / 2, a = $(window).height() / 2 - t / 2, o = "width=" + e + ",height=" + t + ",left=" + n + ",top=" + a + ",location=0,menubar=0,scrollbars=1,status=0,toolbar=0,resizable=1";
                this._popupWindow = window.open("https://secure.twitch.tv/settings/channel?bttvMassUnban=true", "_blank", o);
                var s = this, i = setInterval(function () {
                    s._popupWindow && s._popupWindow.closed && (s.done(), clearInterval(i))
                }, 1e3);
                window.addEventListener("message", this._receivedMessage.bind(this), !1)
            }, a.prototype.getNextBatch = function (e) {
                this.events.once("bannedUsers", function (t) {
                    e(t)
                }), this._popupWindow ? this._popupWindow.postMessage("bttv_massunban_reload", "https://secure.twitch.tv") : this.receiver()
            }, a.prototype.done = function () {
                window.removeEventListener("message", this._receivedMessage.bind(this), !1);
                try {
                    this._popupWindow.close()
                } catch (e) {
                }
                this._popupWindow = null
            }, t.exports = a
        }, {events: 71}],
        51: [function (e, t, n) {
            n.escapeRegExp = function (e) {
                return e.replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&")
            }, n.getEmoteFromRegEx = function (e) {
                return decodeURI(e.source).replace("&gt\\;", ">").replace("&lt\\;", "<").replace(/\(\?![^)]*\)/g, "").replace(/\(([^|])*\|?[^)]*\)/g, "$1").replace(/\[([^|])*\|?[^\]]*\]/g, "$1").replace(/[^\\]\?/g, "").replace(/^\\b|\\b$/g, "").replace(/\\/g, "")
            }
        }, {}],
        52: [function (e, t) {
            t.exports = {
                LeftClick: 1,
                Backspace: 8,
                Tab: 9,
                Enter: 13,
                Shift: 16,
                Ctrl: 17,
                Alt: 18,
                Pause: 19,
                Capslock: 20,
                Esc: 27,
                Space: 32,
                Pageup: 33,
                Pagedown: 34,
                End: 35,
                Home: 36,
                LeftArrow: 37,
                UpArrow: 38,
                RightArrow: 39,
                DownArrow: 40,
                Insert: 45,
                Delete: 46,
                0: 48,
                1: 49,
                2: 50,
                3: 51,
                4: 52,
                5: 53,
                6: 54,
                7: 55,
                8: 56,
                9: 57,
                a: 65,
                b: 66,
                c: 67,
                d: 68,
                e: 69,
                f: 70,
                g: 71,
                h: 72,
                i: 73,
                j: 74,
                k: 75,
                l: 76,
                m: 77,
                n: 78,
                o: 79,
                p: 80,
                q: 81,
                r: 82,
                s: 83,
                t: 84,
                u: 85,
                v: 86,
                w: 87,
                x: 88,
                y: 89,
                z: 90,
                "0numpad": 96,
                "1numpad": 97,
                "2numpad": 98,
                "3numpad": 99,
                "4numpad": 100,
                "5numpad": 101,
                "6numpad": 102,
                "7numpad": 103,
                "8numpad": 104,
                "9numpad": 105,
                Multiply: 106,
                Plus: 107,
                Minut: 109,
                Dot: 110,
                Slash1: 111,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                Equal: 187,
                Comma: 188,
                Slash: 191,
                Backslash: 220
            }
        }, {}],
        53: [function (e, t) {
            t.exports = function (e) {
                return {
                    night: {
                        mod: !0,
                        tagType: "broadcaster",
                        tagName: '<span style="color:#FFD700;">Creator</span>',
                        color: "#000;text-shadow: 0 0 10px #FFD700"
                    },
                    gspwar: {mod: !1, tagType: "admin", tagName: "EH?"},
                    nightmare: {mod: !1, tagType: "broadcaster", tagName: "MLG"},
                    sour: {
                        mod: !1,
                        tagType: "brown",
                        tagName: '<span style="color:#FFE600;">Saucy</span>',
                        color: e.color + ";text-shadow: 0 0 10px #FFD700"
                    },
                    yorkyyork: {mod: !1, tagType: "broadcaster", tagName: "Nerd"},
                    striker035: {mod: !0, tagType: "admin", tagName: "MotherLover"},
                    dog: {mod: !0, tagType: "bot", tagName: "Smelly"},
                    jruxdev: {mod: !0, tagType: "bot", tagName: "MuttonChops"},
                    totally_cereal: {mod: !0, tagType: "staff", tagName: "Fruity"},
                    virtz: {mod: !0, tagType: "staff", tagName: "Perv"},
                    unleashedbeast: {mod: !0, tagType: "admin", tagName: '<span style="color:black;">Surface</span>'},
                    kona: {mod: !0, tagType: "broadcaster", tagName: "KK"},
                    norfolk: {mod: !0, tagType: "broadcaster", tagName: "Creamy"},
                    leftyben: {mod: !0, tagType: "lefty", tagName: "&nbsp;"},
                    nokz: {mod: !0, tagType: "staff", tagName: "N47"},
                    blindfolded: {mod: !0, tagType: "broadcaster", tagName: "iLag"},
                    jagrawr: {mod: !0, tagType: "admin", tagName: "Jag"},
                    snorlaxitive: {mod: !0, tagType: "purple", tagName: "King"},
                    excalibur: {mod: !0, tagType: "staff", tagName: "Boss"},
                    chez_plastic: {mod: !0, tagType: "staff", tagName: "Frenchy"},
                    frontiersman72: {mod: !0, tagType: "admin", tagName: "TMC"},
                    dckay14: {mod: !0, tagType: "admin", tagName: "Ginger"},
                    harksa: {mod: !0, tagType: "orange", tagName: "Feet"},
                    lltherocksaysll: {mod: !0, tagType: "broadcaster", tagName: "BossKey"},
                    melissa_loves_everyone: {mod: !0, tagType: "purple", tagName: "Chubby", nickname: "Bunny"},
                    redvaloroso: {mod: !0, tagType: "broadcaster", tagName: "Dio"},
                    slapage: {mod: !0, tagType: "bot", tagName: "I aM"},
                    eternal_nightmare: {mod: !0, tagType: "broadcaster", tagName: "Spencer", nickname: "Nickiforek"},
                    iivii_beauty: {mod: !0, tagType: "purple", tagName: "Crave"},
                    theefrenzy: {mod: !0, tagType: "staff", tagName: "Handsome"},
                    gennousuke69: {mod: !0, tagType: "admin", tagName: "Evil"},
                    zebbazombies: {mod: !0, tagType: "moderator", tagName: "Hugs"},
                    nobama12345: {mod: !0, tagType: "broadcaster", tagName: "SeÃ±or"},
                    uleet: {mod: !0, tagType: "moderator", tagName: "Taco"},
                    mrimjustaminorthreat: {
                        mod: !0,
                        tagType: "staff",
                        tagName: '<span style="color:pink;">Major</span>',
                        nickname: "mrimjustamajorthreat"
                    },
                    sournothardcore: {
                        mod: !0,
                        tagType: "brown",
                        tagName: '<span style="color:#FFE600 !important;">Saucy</span>',
                        color: e.color + ";text-shadow: 0 0 10px #FFD700"
                    },
                    mac027: {mod: !0, tagType: "admin", tagName: "Hacks"},
                    vaughnwhiskey: {mod: !0, tagType: "admin", tagName: "Bacon"},
                    socaldesigner: {mod: !0, tagType: "broadcaster", tagName: "Legend"},
                    perfectorzy: {mod: !0, tagType: "moderator", tagName: "Jabroni Ave"},
                    pantallideth1: {mod: !0, tagType: "staff", tagName: "Windmill"},
                    mmjc: {mod: !0, tagType: "admin", tagName: "m&m"},
                    hawkeyye: {mod: !0, tagType: "broadcaster", tagName: "EnVy", nickname: "Hawkeye"},
                    the_chopsticks: {mod: !0, tagType: "admin", tagName: "oZn"},
                    bacon_donut: {mod: !0, tagType: "bacon", tagName: "&#8203;", nickname: "Donut"},
                    tacos: {mod: !0, tagType: "taco", tagName: "&#8203;"},
                    sauce: {mod: !0, tagType: "purple", tagName: 'Drippin" Dat'},
                    thejokko: {mod: !0, tagType: "purple", tagName: "Swede"},
                    missmiarose: {mod: !0, tagType: "admin", tagName: "Lovely"},
                    r3lapse: {mod: !0, tagType: "staff", tagName: "Kershaw"},
                    im_tony_: {mod: !0, tagType: "admin", tagName: "oZn"},
                    tips_: {mod: !0, tagType: "staff", tagName: "241"},
                    "1danny1032": {mod: !0, tagType: "admin", tagName: "1Bar"},
                    cvagts: {mod: !0, tagType: "staff", tagName: "SRL"},
                    thesabe: {mod: !0, tagType: "orange", tagName: '<span style="color:blue;">Sabey</span>'},
                    kerviel_: {mod: !0, tagType: "staff", tagName: "Almighty"},
                    ackleyman: {mod: !0, tagType: "orange", tagName: "Ack"}
                }
            }
        }, {}],
        54: [function (e, t) {
            function n() {
                try {
                    return !!window.frameElement
                } catch (e) {
                    return !0
                }
            }

            t.exports = function () {
                if (n() && window.jQuery && window.jQuery("body").hasClass("kraken-embed")) {
                    var e = function (e) {
                        if (e.data && "string" == typeof e.data && "bttv_login_dark" === e.data.split(" ")[0]) {
                            var t = ".kraken-embed .card.embed { background: #1e1e1e; }", n = ".kraken-embed .card.embed label { color: #A0A0A0; }", a = ".kraken-embed .card.embed a { color: #d3d3d3; }", o = ".kraken-embed .card.embed input.text, .kraken-embed .card.embed input.string, .kraken-embed .card.embed textarea, .kraken-embed .dropdown, .kraken-embed .dropdown_static { background: #333; color: #fff; }", s = ".kraken-embed .card.embed input.text:focus, .kraken-embed .card.embed input.string:focus, .kraken-embed .card.embed textarea:focus, .kraken-embed .active_dropdown { box-shadow: none; }", i = '.kraken-embed .dropdown:before, .kraken-embed .dropdown_static:before { content: ""; position: absolute; top: 50%; right: 7px; margin-top: -2px; width: 0; height: 0; border: 5px solid rgba(255, 255, 255, 0.25); border-left-color: transparent; border-right-color: transparent; border-bottom-color: transparent; }', r = window.jQuery("<style/>");
                            r.append(t), r.append(n), r.append(a), r.append(o), r.append(s), r.append(i), $("head").append(r)
                        }
                    };
                    window.addEventListener("message", e, !1), window.parent.postMessage("bttv_is_login_dark", "http://www.twitch.tv")
                }
            }
        }, {}],
        55: [function (t, n) {
            var a = e.chat, o = e.vars, s = t("./features/split-chat"), i = t("./features/darken-page"), r = t("./features/handle-background"), c = t("./features/flip-dashboard"), l = t("./features/css-loader"), d = t("./features/host-btn-below-video"), h = t("./features/anon-chat"), u = t("./features/handle-twitchchat-emotes"), g = t("./helpers/element").display, p = t("./helpers/element").remove, m = t("./features/image-preview");
            n.exports = [{
                name: "Anon Chat",
                description: "Join channels without appearing in chat",
                "default": !1,
                storageKey: "anonChat",
                toggle: function () {
                    h()
                },
                load: function () {
                    h()
                }
            }, {
                name: "Alpha Chat Badges",
                description: "Removes the background from chat badges",
                "default": !1,
                storageKey: "alphaTags"
            }, {
                name: "Automatic Theatre Mode",
                description: "Automatically enables theatre mode",
                "default": !1,
                storageKey: "autoTheatreMode"
            }, {
                name: "BetterTTV Emotes",
                description: "BetterTTV adds extra cool emotes for you to use",
                "default": !0,
                storageKey: "bttvEmotes"
            }, {
                name: "BetterTTV GIF Emotes",
                description: "We realize not everyone likes GIFs, but some people do.",
                "default": !1,
                storageKey: "bttvGIFEmotes"
            }, {
                name: "Blue Buttons",
                description: "Blue is better than purple, so we make it an option.",
                "default": !1,
                storageKey: "showBlueButtons",
                toggle: function (e) {
                    e === !0 ? l.load("blue-buttons", "showBlueButtons") : l.unload("showBlueButtons")
                },
                load: function () {
                    l.load("blue-buttons", "showBlueButtons")
                }
            }, {
                name: "Chat Image Preview",
                description: "Preview chat images on mouse over",
                "default": !0,
                storageKey: "chatImagePreview",
                toggle: function (e) {
                    e === !0 ? m.enablePreview() : m.disablePreview()
                }
            }, {
                name: "DarkenTTV",
                description: "A sleek, grey theme which will make you love the site even more",
                "default": !1,
                storageKey: "darkenedMode",
                toggle: function (t) {
                    t === !0 ? (i(), e.settings.get("splitChat") !== !1 && ($("#splitChat").remove(), s())) : ($("#darkTwitch").remove(), r(), e.settings.get("splitChat") !== !1 && ($("#splitChat").remove(), s()))
                },
                load: function () {
                    var t = !1;
                    window.App && App.__container__.lookup("controller:Layout") && App.__container__.lookup("controller:Layout").addObserver("isTheatreMode", function () {
                        this.get("isTheatreMode") === !0 ? (t = e.settings.get("darkenedMode"), t === !1 && (e.settings.save("darkenedMode", !0), e.storage.put("bttv_darkenedMode", !1))) : t === !1 && e.settings.save("darkenedMode", !1)
                    })
                }
            }, {
                name: "Default to Live Channels",
                description: 'BetterTTV can click on "Channels" for you in the Following Overview automatically',
                "default": !1,
                storageKey: "showDirectoryLiveTab"
            }, {
                name: "Desktop Notifications",
                description: "BetterTTV can send you desktop notifications when you are tabbed out of Twitch",
                "default": !1,
                storageKey: "desktopNotifications",
                toggle: function (t) {
                    t === !0 ? window.Notification ? "default" === Notification.permission || window.webkitNotifications && 1 === webkitNotifications.checkPermission() ? Notification.requestPermission(function () {
                        "granted" === Notification.permission || window.webkitNotifications && 0 === webkitNotifications.checkPermission() ? (e.settings.save("desktopNotifications", !0), e.notify("Desktop notifications are now enabled.")) : e.notify("You denied BetterTTV permission to send you notifications.")
                    }) : "granted" === Notification.permission || window.webkitNotifications && 0 === webkitNotifications.checkPermission() ? (e.settings.save("desktopNotifications", !0), e.notify("Desktop notifications are now enabled.")) : "denied" === Notification.permission || window.webkitNotifications && 2 === webkitNotifications.checkPermission() ? Notification.requestPermission(function () {
                        "granted" === Notification.permission || window.webkitNotifications && 0 === webkitNotifications.checkPermission() ? (e.settings.save("desktopNotifications", !0), e.notify("Desktop notifications are now enabled.")) : e.notify("You denied BetterTTV permission to send you notifications.")
                    }) : e.notify("Your browser is not capable of desktop notifications.") : e.notify("Your browser is not capable of desktop notifications.") : e.notify("Desktop notifications are now disabled.")
                }
            }, {
                name: "Double-Click Translation",
                description: "Double-clicking on chat lines translates them with Google Translate",
                "default": !1,
                storageKey: "dblclickTranslation",
                toggle: function (e) {
                    e === !0 ? $("body").on("dblclick", ".chat-line", function () {
                        a.helpers.translate($(this).find(".message"), $(this).data("sender"), $(this).find(".message").data("raw")), $(this).find(".message").text("Translating.."), $("div.tipsy").remove()
                    }) : $("body").unbind("dblclick")
                }
            }, {
                name: "Directory Preview",
                description: "Hover over streams to get a live preview of the stream",
                "default": !1,
                storageKey: "directoryPreview",
                toggle: function (e) {
                    e === !0 ? this.load() : $("body").off("mouseover", "#directory-list .streams a.cap").off("mouseout", "#directory-list .streams a.cap")
                },
                load: function () {
                    e.settings.get("directoryPreview") !== !1 && $("body").on("mouseover", "#directory-list .streams a.cap", function () {
                        var e = encodeURIComponent($(this).attr("href").substr(1)), t = "";
                        window.navigator.userAgent.indexOf("Chrome") > -1 && (t = "&html5"), $("div.tipsy").remove();
                        var n = $(this);
                        setTimeout(function () {
                            n.is(":hover") && ($("div.tipsy").remove(), n.tipsy({
                                trigger: "manual",
                                gravity: $.fn.tipsy.autoNS,
                                html: !0,
                                opacity: 1,
                                title: function () {
                                    return '<iframe src="http://player.twitch.tv/?channel=' + e + "&!branding&!showInfo&autoplay&volume=0.1" + t + '" style="border: none;" width="320" height="208"></iframe><style>.tipsy-inner{max-width:320px;}</style>'
                                }
                            }), n.tipsy("show"))
                        }, 1500)
                    }).on("mouseout", "#directory-list .streams a.cap", function () {
                        var e = $(this);
                        if ($("div.tipsy").length)var t = setInterval(function () {
                            $("div.tipsy").is(":hover") || (clearInterval(t), e.tipsy("hide"))
                        }, 1e3)
                    }).on("click", "#directory-list .streams a.cap", function () {
                        $(this).tipsy("hide"), $("div.tipsy").remove()
                    })
                }
            }, {
                name: "Disable Host Mode",
                description: "Disables hosted channels on Twitch",
                "default": !1,
                storageKey: "disableHostMode",
                toggle: function (e) {
                    try {
                        window.App.set("enableHostMode", !e)
                    } catch (t) {
                    }
                },
                load: function () {
                    try {
                        window.App.set("enableHostMode", !e.settings.get("disableHostMode"))
                    } catch (t) {
                    }
                }
            }, {
                name: "Disable Name Colors",
                description: "Disables colors in chat (useful for those who may suffer from color blindness)",
                "default": !1,
                storageKey: "disableUsernameColors",
                toggle: function (e) {
                    e === !0 ? $(".ember-chat .chat-room").addClass("no-name-colors") : $(".ember-chat .chat-room").removeClass("no-name-colors")
                }
            }, {
                name: "Disable Whispers",
                description: "Disables the Twitch whisper feature and hides any whispers you receive",
                "default": !1,
                storageKey: "disableWhispers"
            }, {
                name: "Double-Click Auto-Complete",
                description: "Double-clicking a username in chat copies it into the chat text box",
                "default": !1,
                storageKey: "dblClickAutoComplete"
            }, {
                name: "Embedded Polling",
                description: "See polls posted by the broadcaster embedded right into chat",
                "default": !0,
                storageKey: "embeddedPolling"
            }, {
                name: "Emote Menu",
                description: "Get a more advanced emote menu for Twitch. (Made by Ryan Chatham)",
                "default": !1,
                storageKey: "clickTwitchEmotes",
                toggle: function (e) {
                    e === !0 ? u() : ($("#emote-menu-button").remove(), $("#clickTwitchEmotes").remove())
                }
            }, {
                name: "Featured Channels",
                description: "The left sidebar is too cluttered, so BetterTTV removes featured channels by default",
                "default": !1,
                storageKey: "showFeaturedChannels",
                toggle: function (e) {
                    e === !0 ? (g("#nav_games"), g("#nav_streams"), g("#nav_related_streams")) : (p("#nav_games"), p("#nav_streams"), p("#nav_related_streams"))
                }
            }, {
                name: "Following Notifications",
                description: "BetterTTV will notify you when channels you follow go live",
                "default": !0,
                storageKey: "followingNotifications"
            }, {
                name: "Hide Group Chat",
                description: "Hides the group chat bar above chat",
                "default": !1,
                storageKey: "groupChatRemoval",
                toggle: function (e) {
                    e === !0 ? l.load("hide-group-chat", "groupChatRemoval") : l.unload("groupChatRemoval")
                },
                load: function () {
                    l.load("hide-group-chat", "groupChatRemoval")
                }
            }, {
                name: "Hide Spam Messages",
                description: "Hides known spam messages. Click on the message to reveal it",
                "default": !0,
                storageKey: "hideSpam"
            }, {
                name: "Host Button",
                description: "Places a Host/Unhost button below the video player",
                "default": !1,
                storageKey: "hostButton",
                toggle: function (e) {
                    e === !0 ? d() : $("#bttv-host-button").remove()
                }
            }, {
                name: "JTV Chat Badges",
                description: "BetterTTV can replace the chat badges with the ones from JTV",
                "default": !1,
                storageKey: "showJTVTags"
            }, {
                name: "JTV Monkey Emotes",
                description: "BetterTTV replaces the robot emoticons with the old JTV monkey faces",
                "default": !1,
                storageKey: "showMonkeyEmotes"
            }, {
                name: "Mod Card Keybinds",
                description: "Enable keybinds when you click on a username: P(urge), T(imeout), B(an), W(whisper)",
                "default": !1,
                storageKey: "modcardsKeybinds"
            }, {
                name: "Other Messages Alert",
                description: 'BetterTTV can alert you when you receive a message to your "Other" messages folder',
                "default": !1,
                storageKey: "alertOtherMessages"
            }, {
                name: "Pin Highlighted Messages",
                description: "Pin your ten latest highlighted messages right above chat",
                "default": !1,
                storageKey: "pinnedHighlights",
                toggle: function (e) {
                    e === !1 && $("#bttv-pin-container").remove()
                }
            }, {
                name: "Play Sound on Highlight/Whisper",
                description: "Get audio feedback for messages directed at you (BETA)",
                "default": !1,
                storageKey: "highlightFeedback"
            }, {
                name: "Remove Deleted Messages",
                description: "Completely removes timed out messages from view",
                "default": !1,
                storageKey: "hideDeletedMessages"
            }, {
                name: "Shift-Click Custom Timeouts",
                description: "Requires shift + click to activate the custom timeout selector",
                "default": !1,
                storageKey: "customTOShiftOnly"
            }, {
                name: "Show Deleted Messages",
                description: "Turn this on to change <message deleted> back to users' messages.",
                "default": !1,
                storageKey: "showDeletedMessages"
            }, {
                name: "Split Chat",
                description: "Easily distinguish between messages from different users in chat",
                "default": !1,
                storageKey: "splitChat",
                toggle: function (e) {
                    e === !0 ? s() : $("#splitChat").remove()
                }
            }, {
                name: "Tab Completion Tooltip",
                description: "Shows a tooltip with suggested names when using tab completion",
                "default": !1,
                storageKey: "tabCompletionTooltip"
            }, {
                name: "Timeout Pinned Highlights",
                description: "Automatically hide pinned highlights after 1 minute",
                "default": !1,
                storageKey: "timeoutHighlights"
            }, {
                "default": "", storageKey: "blacklistKeywords", toggle: function (e) {
                    var t, n = /\{.+?\}/g, o = e.match(n), s = [];
                    if (o)for (t = 0; t < o.length; t++) {
                        var i = o[t];
                        e = e.replace(i, "").replace(/\s\s+/g, " ").trim(), s.push('"' + i.replace(/(^\{|\}$)/g, "").trim() + '"')
                    }
                    for (e = "" === e ? s : e.split(" ").concat(s), t = 0; t < e.length; t++)/^\([a-z0-9_\-\*]+\)$/i.test(e[t]) && (e[t] = e[t].replace(/(\(|\))/g, ""));
                    var r = e.join(", ");
                    "" === r ? a.helpers.serverMessage("Blacklist Keywords list is empty", !0) : a.helpers.serverMessage("Blacklist Keywords are now set to: " + r, !0)
                }
            }, {
                "default": !0, storageKey: "chatLineHistory", toggle: function (e) {
                    e === !0 ? a.helpers.serverMessage("Chat line history enabled.", !0) : a.helpers.serverMessage("Chat line history disabled.", !0)
                }
            }, {"default": 340, storageKey: "chatWidth"}, {"default": !1, storageKey: "consoleLog"}, {
                "default": !1,
                storageKey: "flipDashboard",
                toggle: function (e) {
                    e === !0 ? ($("#flipDashboard").text("Unflip Dashboard"), c()) : ($("#flipDashboard").text("Flip Dashboard"), c())
                }
            }, {
                "default": o.userData.isLoggedIn ? o.userData.name : "",
                storageKey: "highlightKeywords",
                toggle: function (e) {
                    var t = /\{.+?\}/g, n = e.match(t), o = [];
                    if (n)for (var s = 0; s < n.length; s++) {
                        var i = n[s];
                        e = e.replace(i, "").replace(/\s\s+/g, " ").trim(), o.push('"' + i.replace(/(^\{|\}$)/g, "").trim() + '"')
                    }
                    e = "" === e ? o : e.split(" ").concat(o);
                    for (var r = 0; r < e.length; r++)/^\([a-z0-9_\-\*]+\)$/i.test(e[r]) && (e[r] = e[r].replace(/(\(|\))/g, ""));
                    var c = e.join(", ");
                    "" === c ? a.helpers.serverMessage("Highlight Keywords list is empty", !0) : a.helpers.serverMessage("Highlight Keywords are now set to: " + c, !0)
                }
            }, {
                "default": 150, storageKey: "scrollbackAmount", toggle: function (e) {
                    150 === e ? a.helpers.serverMessage("Chat scrollback is now set to: default (150)", !0) : a.helpers.serverMessage("Chat scrollback is now set to: " + e, !0)
                }
            }]
        }, {
            "./features/anon-chat": 13,
            "./features/css-loader": 27,
            "./features/darken-page": 29,
            "./features/flip-dashboard": 34,
            "./features/handle-background": 37,
            "./features/handle-twitchchat-emotes": 38,
            "./features/host-btn-below-video": 39,
            "./features/image-preview": 40,
            "./features/split-chat": 45,
            "./helpers/element": 48
        }],
        56: [function (t, n) {
            function a() {
                this._settings = {}, this.prefix = "bttv_"
            }

            var o = t("./helpers/debug"), s = t("./helpers/filesaver").saveAs;
            a.prototype._parseSetting = function (e) {
                return null === e ? null : "true" === e ? !0 : "false" === e ? !1 : "" === e ? "" : isNaN(e) === !1 ? parseInt(e, 10) : e
            }, a.prototype.load = function () {
                var n = this, a = t("./settings-list"), o = t("./templates/setting-switch"), s = '         <div class="option">             Think something is missing here? Send in a <a href="https://github.com/night/BetterTTV/issues/new?labels=enhancement" target="_blank">feature request</a>!         </div>     ';
                a.forEach(function (t) {
                    if (n._settings[t.storageKey] = t, n._settings[t.storageKey].value = null !== e.storage.get(n.prefix + t.storageKey) ? n._parseSetting(e.storage.get(n.prefix + t.storageKey)) : t.default, t.name) {
                        var a = o(t);
                        $("#bttvSettings .options-list").append(a), n._settings[t.storageKey].value === !0 ? $("#" + t.storageKey + "True").prop("checked", !0) : $("#" + t.storageKey + "False").prop("checked", !0)
                    }
                    t.load && t.load()
                }), $("#bttvSettings .options-list").append(s), $(".option input:radio").change(function (e) {
                    n.save(e.target.name, n._parseSetting(e.target.value))
                });
                var i = e.storage.getObject("bttvNotifications");
                for (var r in i)if (i.hasOwnProperty(r)) {
                    var c = i[r];
                    c.expire < Date.now() && e.storage.spliceObject("bttvNotifications", r)
                }
                var l = function (t) {
                    if (t.data) {
                        if ("string" != typeof t.data)return;
                        var a = t.data.split(" ");
                        if ("bttv_setting" === a[0]) {
                            if (t.origin !== window.location.protocol + "//" + window.location.host)return;
                            var o = a[1], s = n._parseSetting(a[2]);
                            n.save(o, s)
                        } else if ("bttv_is_login_dark" === a[0]) {
                            if (e.settings.get("darkenedMode") !== !0)return;
                            t.source.postMessage("bttv_login_dark", t.origin)
                        }
                    }
                };
                window.addEventListener("message", l, !1)
            }, a.prototype.backup = function () {
                var e = {}, t = this;
                Object.keys(this._settings).forEach(function (n) {
                    var a = t._settings[n].value;
                    e[n] = a
                }), e = new Blob([JSON.stringify(e)], {type: "text/plain;charset=utf-8;"}), s(e, "bttv_settings.backup")
            }, a.prototype.import = function (t) {
                var n = this, a = function (e, t) {
                    var n = new FileReader;
                    n.onload = function (e) {
                        t(e.target.result)
                    }, n.readAsText(e.files[0])
                }, s = function (e) {
                    try {
                        JSON.parse(e)
                    } catch (t) {
                        return !1
                    }
                    return !0
                };
                a(t, function (t) {
                    if (s(t)) {
                        var a = JSON.parse(t), i = 0;
                        Object.keys(a).forEach(function (e) {
                            try {
                                n.set(e, a[e]), i++
                            } catch (t) {
                                o.log("Import Error: " + e + " does not exist in settings list. Ignoring...")
                            }
                        }), e.notify("BetterTTV imported " + i + " settings, and will now refresh in a few seconds."), setTimeout(function () {
                            window.location.reload()
                        }, 3e3)
                    } else e.notify("You uploaded an invalid file.")
                })
            }, a.prototype.get = function (e) {
                return e in this._settings ? this._settings[e].value : null
            }, a.prototype.set = function (t, n) {
                this._settings[t].value = n, e.storage.put(this.prefix + t, n)
            }, a.prototype.save = function (e, t) {
                if (/\?bttvSettings=true/.test(window.location))window.opener.postMessage("bttv_setting " + e + " " + t, window.location.protocol + "//" + window.location.host); else try {
                    window !== window.top && window.parent.postMessage("bttv_setting " + e + " " + t, window.location.protocol + "//" + window.location.host), this.set(e, t), this._settings[e].toggle && this._settings[e].toggle(t)
                } catch (n) {
                    o.log(n)
                }
            }, a.prototype.popup = function () {
                var e = window.location.protocol + "//" + window.location.host + "/directory?bttvSettings=true";
                window.open(e, "BetterTTV Settings", "width=800,height=500,top=500,left=800,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no")
            }, n.exports = a
        }, {"./helpers/debug": 47, "./helpers/filesaver": 49, "./settings-list": 55, "./templates/setting-switch": 65}],
        57: [function (e, t) {
            function n() {
                if (this._localStorageSupport = !0, window.localStorage)try {
                    window.localStorage.setItem("bttv_test", "it works!"), window.localStorage.removeItem("bttv_test")
                } catch (e) {
                    o.log("window.localStorage detected, but unable to save. Defaulting to cookies."), this._localStorageSupport = !1
                } else o.log("window.localStorage not detected. Defaulting to cookies."), this._localStorageSupport = !1
            }

            var a = e("cookies-js"), o = e("./helpers/debug");
            n.prototype.exists = function (e) {
                return this.get(e) ? !0 : !1
            }, n.prototype.get = function (e) {
                return this._localStorageSupport ? window.localStorage.getItem(e) : a.get(e)
            }, n.prototype.getArray = function (e) {
                return !this.exists(e), JSON.parse(this.get(e))
            }, n.prototype.getObject = function (e) {
                return this.exists(e) ? JSON.parse(this.get(e)) : {}
            }, n.prototype.put = function (e, t) {
                this._localStorageSupport ? window.localStorage.setItem(e, t) : a.set(e, t, {expires: 1 / 0})
            }, n.prototype.pushArray = function (e, t) {
                var n = this.getArray(e);
                n.push(t), this.putArray(e, n)
            }, n.prototype.pushObject = function (e, t, n) {
                var a = this.getObject(e);
                a[t] = n, this.putObject(e, a)
            }, n.prototype.putArray = function (e, t) {
                this.put(e, JSON.stringify(t))
            }, n.prototype.putObject = function (e, t) {
                this.put(e, JSON.stringify(t))
            }, n.prototype.spliceArray = function (e, t) {
                var n = this.getArray(e);
                -1 !== n.indexOf(t) && n.splice(n.indexOf(t), 1), this.putArray(e, n)
            }, n.prototype.spliceObject = function (e, t) {
                var n = this.getObject(e);
                delete n[t], this.putObject(e, n)
            }, t.exports = n
        }, {"./helpers/debug": 47, "cookies-js": 70}],
        58: [function (e, t) {
            function n() {
                var e = [];
                return e.push('<div id="bttv-channel-state-contain"><div title="Robot9000 Enabled" class="r9k"><svg width="26px" height="22px" version="1.1" viewBox="0 0 26 22" x="0px" y="0px"><path clip-rule="evenodd" fill-rule="evenodd" fill="#d3d3d3" stroke="none" d="M2.98763607,10.2134233 C2.98763607,9.87789913 2.97951867,9.53696837 2.96328363,9.19062081 C2.94704859,8.84427325 2.93351959,8.3951105 2.92269623,7.84311909 L3.97796866,7.84311909 L3.97796866,9.25556065 L4.01043858,9.25556065 C4.08620211,9.04991679 4.1944341,8.85239341 4.33513779,8.66298459 C4.47584149,8.47357577 4.64630687,8.30311039 4.84653905,8.15158334 C5.04677123,8.00005628 5.27947001,7.87829529 5.54464235,7.78629672 C5.8098147,7.69429815 6.11015847,7.64829956 6.44568266,7.64829956 C6.74873677,7.64829956 7.01390514,7.68076916 7.24119573,7.74570932 L7.03014124,8.80098176 C6.88943755,8.74686495 6.68379677,8.71980695 6.41321274,8.71980695 C6.00192502,8.71980695 5.65017106,8.79827515 5.35794031,8.95521388 C5.06570956,9.11215262 4.82218758,9.3123818 4.62736708,9.55590742 C4.43254658,9.79943305 4.2891392,10.0618956 4.19714063,10.343303 C4.10514206,10.6247104 4.05914347,10.8952904 4.05914347,11.155051 L4.05914347,15.4410806 L2.98763607,15.4410806 L2.98763607,10.2134233 Z M14.1735239,7.30736539 C14.1735239,6.93937111 14.1112905,6.60385195 13.9868218,6.30079784 C13.8623532,5.99774372 13.6864762,5.73798695 13.4591856,5.52151973 C13.231895,5.30505251 12.9613151,5.13458713 12.6474376,5.01011847 C12.3335601,4.88564982 11.9872178,4.82341643 11.6084001,4.82341643 C11.2295825,4.82341643 10.8832401,4.88564982 10.5693626,5.01011847 C10.2554852,5.13458713 9.98490519,5.30505251 9.75761461,5.52151973 C9.53032403,5.73798695 9.35444705,5.99774372 9.22997839,6.30079784 C9.10550974,6.60385195 9.04327635,6.93937111 9.04327635,7.30736539 C9.04327635,7.67535967 9.10550974,8.01087883 9.22997839,8.31393294 C9.35444705,8.61698705 9.53032403,8.87944962 9.75761461,9.10132853 C9.98490519,9.32320743 10.2554852,9.49367281 10.5693626,9.61272978 C10.8832401,9.73178676 11.2295825,9.79131435 11.6084001,9.79131435 C11.9872178,9.79131435 12.3335601,9.73178676 12.6474376,9.61272978 C12.9613151,9.49367281 13.231895,9.32320743 13.4591856,9.10132853 C13.6864762,8.87944962 13.8623532,8.61698705 13.9868218,8.31393294 C14.1112905,8.01087883 14.1735239,7.67535967 14.1735239,7.30736539 L14.1735239,7.30736539 Z M13.0046067,10.5056526 L12.9721368,10.4731827 C12.7881397,10.603063 12.5419119,10.7004718 12.2334461,10.765412 C11.9249803,10.8303521 11.6408713,10.8628217 11.3811107,10.8628217 C10.8832361,10.8628217 10.4205443,10.7735304 9.99302154,10.5949449 C9.56549877,10.4163594 9.19480422,10.1701317 8.88092674,9.85625419 C8.56704927,9.54237672 8.3208215,9.16897636 8.14223604,8.73604192 C7.96365058,8.30310747 7.87435919,7.82688672 7.87435919,7.30736539 C7.87435919,6.77702069 7.96635638,6.29538835 8.15035352,5.8624539 C8.33435066,5.42951946 8.59410743,5.0561191 8.92963162,4.74224162 C9.26515582,4.42836415 9.66020257,4.18484218 10.1147837,4.0116684 C10.5693649,3.83849462 11.0672321,3.75190903 11.6084001,3.75190903 C12.1495682,3.75190903 12.6474353,3.83849462 13.1020165,4.0116684 C13.5565976,4.18484218 13.9516444,4.42836415 14.2871686,4.74224162 C14.6226928,5.0561191 14.8824496,5.42951946 15.0664467,5.8624539 C15.2504438,6.29538835 15.342441,6.77702069 15.342441,7.30736539 C15.342441,7.9459437 15.247738,8.50333843 15.0583292,8.97956632 C14.8689204,9.45579421 14.6335158,9.92660336 14.3521084,10.3920079 L11.251231,15.4410806 L9.87125933,15.4410806 L13.0046067,10.5056526 Z M18.3621437,11.2686958 L21.95007,7.84311909 L23.5573311,7.84311909 L19.7745853,11.3174006 L23.9632051,15.4410806 L22.3072391,15.4410806 L18.3621437,11.4472803 L18.3621437,15.4410806 L17.2906363,15.4410806 L17.2906363,3.16745045 L18.3621437,3.16745045 L18.3621437,11.2686958 Z"></path></svg></div><div title="Subscribers-Only Mode Enabled" class="subs-only"><svg width="26px" height="22px" version="1.1" viewBox="0 0 26 22" x="0px" y="0px"><path clip-rule="evenodd" fill-rule="evenodd" fill="#d3d3d3" stroke="none" d="M9.27481618,13.6268381 C9.27481619,15.0585936 21.1132816,15.0078128 21.1132816,13.6268381 C21.1132816,12.2458633 16.9215274,13.7446739 16.6289064,11.3913143 C16.3362854,9.03795478 17.8113514,9.06502765 17.8113514,7.74195776 C17.8113514,6.41888788 16.1631438,5.44732696 15.194049,5.3492647 C14.2249543,5.25120244 12.5834099,6.17624082 12.5834099,7.74195772 C12.5834099,9.30767461 13.8025847,9.44785699 13.6895682,11.3913143 C13.5765516,13.3347717 9.27481616,12.1950825 9.27481618,13.6268381 Z"></path><path clip-rule="evenodd" fill-rule="evenodd" fill="#d3d3d3" stroke="none" d="M9.05269623,4.02031837 C9.41269803,4.02031837 9.78602763,4.06698457 10.1726962,4.16031837 C10.5593648,4.25365217 10.8993614,4.41698387 11.1926962,4.65031837 L10.2326962,5.82031837 C10.0726954,5.68031767 9.88936393,5.57865202 9.68269623,5.51531837 C9.47602853,5.45198472 9.26603063,5.41365177 9.05269623,5.40031837 L9.05269623,6.99031837 L10.0126962,7.27031837 C10.4526984,7.40365237 10.8043616,7.62198352 11.0676962,7.92531837 C11.3310309,8.22865322 11.4626962,8.61364937 11.4626962,9.08031837 C11.4626962,9.43365347 11.3993635,9.74365037 11.2726962,10.0103184 C11.1460289,10.2769864 10.9726973,10.5036508 10.7526962,10.6903184 C10.5326951,10.876986 10.276031,11.0236512 9.98269623,11.1303184 C9.68936143,11.2369856 9.37936453,11.3069849 9.05269623,11.3403184 L9.05269623,12.0403184 L8.39269623,12.0403184 L8.39269623,11.3403184 C7.95269403,11.3403184 7.51436508,11.280319 7.07769623,11.1603184 C6.64102738,11.0403178 6.25603123,10.8303199 5.92269623,10.5303184 L6.98269623,9.34031837 C7.15603043,9.55365277 7.36602833,9.70531792 7.61269623,9.79531837 C7.85936413,9.88531882 8.11936153,9.94031827 8.39269623,9.96031837 L8.39269623,8.27031837 L7.66269623,8.05031837 C7.15602703,7.89031757 6.77103088,7.66531982 6.50769623,7.37531837 C6.24436158,7.08531692 6.11269623,6.68698757 6.11269623,6.18031837 C6.11269623,5.86698347 6.17602893,5.58365297 6.30269623,5.33031837 C6.42936353,5.07698377 6.59769518,4.86031927 6.80769623,4.68031837 C7.01769728,4.50031747 7.26102818,4.35365227 7.53769623,4.24031837 C7.81436428,4.12698447 8.09936143,4.05365187 8.39269623,4.02031837 L8.39269623,3.32031837 L9.05269623,3.32031837 L9.05269623,4.02031837 Z M8.39269623,5.43031837 C8.20602863,5.47031857 8.03936363,5.54031787 7.89269623,5.64031837 C7.74602883,5.74031887 7.67269623,5.89698397 7.67269623,6.11031837 C7.67269623,6.26365247 7.70269593,6.38365127 7.76269623,6.47031837 C7.82269653,6.55698547 7.89269583,6.62531812 7.97269623,6.67531837 C8.05269663,6.72531862 8.13269583,6.76031827 8.21269623,6.78031837 C8.29269663,6.80031847 8.35269603,6.81698497 8.39269623,6.83031837 L8.39269623,5.43031837 Z M9.05269623,9.94031837 C9.15269673,9.92031827 9.25436238,9.89198522 9.35769623,9.85531837 C9.46103008,9.81865152 9.55269583,9.77031867 9.63269623,9.71031837 C9.71269663,9.65031807 9.77769598,9.57865212 9.82769623,9.49531837 C9.87769648,9.41198462 9.90269623,9.31365227 9.90269623,9.20031837 C9.90269623,9.09365117 9.88436308,9.00365207 9.84769623,8.93031837 C9.81102938,8.85698467 9.76269653,8.79531862 9.70269623,8.74531837 C9.64269593,8.69531812 9.57269663,8.65198522 9.49269623,8.61531837 C9.41269583,8.57865152 9.32936333,8.54365187 9.24269623,8.51031837 L9.05269623,8.44031837 L9.05269623,9.94031837 Z"></path></svg></div><div class="slow"><div title="0 seconds" class="slow-time">0:00</div><svg width="26px" height="22px" version="1.1" viewBox="0 0 26 22" x="0px" y="0px" title="Slow Mode Enabled"><path clip-rule="evenodd" fill-rule="evenodd" fill="#d3d3d3" stroke="none" d="M17.1477712,15.2881724 C18.1841482,15.2990242 18.3714659,13.1141401 18.984666,13.0696235 C20.7929233,12.9383492 21.27411,12.5312339 22.0061575,11.9392359 C23.1373692,11.0244387 19.9060764,12.1089751 19.4762501,10.2570139 C19.0464238,8.40505269 20.0193482,10.024402 20.0193482,10.024402 C20.0193482,10.024402 21.8187185,4.26759557 15.5617966,4.00868857 C9.30487476,3.74978158 10.4161868,9.36314385 10.4161868,9.36314385 C10.4161868,9.36314385 11.2540951,8.34295601 11.2540951,9.63941257 C11.2540951,10.1964047 9.76901904,10.6570445 8.53287358,9.63941257 C7.29672813,8.62178061 8.11686902,7.37127839 7.67827778,6.69569265 C7.23968654,6.02010691 3.76038497,5.06926224 3.24213373,5.95824564 C2.72388249,6.84722904 5.76831809,8.74663617 5.96217543,9.63941257 C6.15603277,10.532189 7.03943787,12.1288651 7.49294803,12.5678492 C7.94645819,13.0068332 5.92939735,14.4797566 6.69153143,14.5326896 C7.45366552,14.5856225 9.47706304,12.9278239 10.0844223,12.7478364 C10.6917815,12.5678489 13.1392341,12.9471552 14.5871877,13.023578 C15.3550569,13.064106 16.1113943,15.2773206 17.1477712,15.2881724 Z M4.84344721,6.76429629 C5.04601701,6.76429629 5.21023228,6.60974074 5.21023228,6.41908681 C5.21023228,6.22843288 5.04601701,6.07387733 4.84344721,6.07387733 C4.6408774,6.07387733 4.47666213,6.22843288 4.47666213,6.41908681 C4.47666213,6.60974074 4.6408774,6.76429629 4.84344721,6.76429629 Z M11.7028228,7.36314163 C11.7326095,6.35178988 13.3449525,4.92929352 15.0963754,4.98088076 C16.8477983,5.032468 18.7948736,6.68625403 18.7749376,7.36314154 C18.7550016,8.04002904 16.952545,5.71526454 15.0963754,5.66059204 C13.2402058,5.60591954 11.673036,8.37449337 11.7028228,7.36314163 Z"></path></svg></div></div>'), e.join("")
            }

            t.exports = n
        }, {}],
        59: [function (t, n) {
            function a(t) {
                var n = [], a = t || {};
                return function (e, t, a) {
                    n.push('<div class="list-header">BetterTTV</div><div class="chat-menu-content">'), e('body[data-page="ember#chat"]').length && n.push('<p><a href="#" class="g18_gear-00000080 blackChatLink">Black Chat (Chroma Key)</a></p>'), (e("#dash_main").length || t !== t.top) && (n.push('<p><a href="#" class="g18_gear-00000080 flipDashboard">'), n.push(a.settings.get("flipDashboard") ? "Unflip Dashboard" : "Flip Dashboard"), n.push("</a></p>")), n.push('<p><input type="checkbox"' + jade.attr("checked", a.settings.get("darkenedMode"), !0, !1) + ' class="toggleDarkenTTV"/>Dark Mode</p><p><a href="#" class="g18_gear-00000080 setBlacklistKeywords">Set Blacklist Keywords</a></p><p><a href="#" class="g18_gear-00000080 setHighlightKeywords">Set Highlight Keywords</a></p><p><a href="#" class="g18_gear-00000080 setScrollbackAmount">Set Scrollback Amount</a></p><p><a href="#" class="g18_trash-00000080 clearChat">Clear My Chat</a></p><p><a href="#" style="display: block;margin-top: 8px;text-align: center;" class="button-simple dark openSettings">BetterTTV Settings</a></p></div>')
                }.call(this, "$"in a ? a.$ : "undefined" != typeof $ ? $ : void 0, "window"in a ? a.window : "undefined" != typeof window ? window : void 0, "bttv"in a ? a.bttv : "undefined" != typeof e ? e : void 0), n.join("")
            }

            n.exports = a
        }, {}],
        60: [function (e, t) {
            function n(e) {
                var t, n = [], a = e || {};
                return function (e, a) {
                    n.push('<div class="suggestions">'), function () {
                        var o = e;
                        if ("number" == typeof o.length)for (var s = 0, i = o.length; i > s; s++) {
                            var r = o[s], c = s === a ? ["highlighted"] : [];
                            n.push("<div" + jade.cls([c], [!0]) + '><div class="suggestion"><span>' + jade.escape(null == (t = r) ? "" : t) + "</span></div></div>")
                        } else {
                            var i = 0;
                            for (var s in o) {
                                i++;
                                var r = o[s], c = s === a ? ["highlighted"] : [];
                                n.push("<div" + jade.cls([c], [!0]) + '><div class="suggestion"><span>' + jade.escape(null == (t = r) ? "" : t) + "</span></div></div>")
                            }
                        }
                    }.call(this), n.push("</div>")
                }.call(this, "suggestions"in a ? a.suggestions : "undefined" != typeof suggestions ? suggestions : void 0, "index"in a ? a.index : "undefined" != typeof index ? index : void 0), n.join("")
            }

            t.exports = n
        }, {}],
        61: [function (e, t) {
            function n() {
                var e = [];
                return e.push('<div id="bttv-custom-timeout-contain"><div class="text"></div><svg width="80px" height="200px" version="1.1" viewBox="0 0 80 200" x="0px" y="0px" class="back"><rect id="purge-rect" fill-opacity="0.303979846" fill="#000000" sketch:type="MSShapeGroup" x="0" y="0" width="80" height="20"></rect><rect id="ban-rect" fill-opacity="0.303979846" fill="#000000" sketch:type="MSShapeGroup" x="0" y="180" width="80" height="20"></rect><path id="time-curve" d="M-5.68434189e-14,19.8046875 C15.9905561,51.8248392 9.84960937,154.183594 80,180" fill="none" stroke-opacity="0.3" stroke="#ACACAC" sketch:type="MSShapeGroup" transform="translate(40.000000, 99.902344) scale(-1, 1) translate(-40.000000, -99.902344) "></path><path id="Ban" d="M34.5654297,11.9848633 C34.5654297,12.5268582 34.4628917,13.005369 34.2578125,13.4204102 C34.0527333,13.8354513 33.7768572,14.1772448 33.4301758,14.4458008 C33.0200175,14.768068 32.5695825,14.9975579 32.0788574,15.1342773 C31.5881323,15.2709968 30.9643593,15.3393555 30.2075195,15.3393555 L26.340332,15.3393555 L26.340332,4.43359375 L29.5703125,4.43359375 C30.3662149,4.43359375 30.9619121,4.46289033 31.3574219,4.52148438 C31.7529317,4.58007842 32.1313458,4.70214751 32.4926758,4.88769531 C32.8930684,5.0976573 33.1835928,5.36742999 33.3642578,5.69702148 C33.5449228,6.02661298 33.6352539,6.42089614 33.6352539,6.87988281 C33.6352539,7.39746353 33.5034193,7.83813295 33.2397461,8.2019043 C32.9760729,8.56567565 32.6245139,8.85742078 32.1850586,9.07714844 L32.1850586,9.13574219 C32.922367,9.28711013 33.5034158,9.61059323 33.9282227,10.1062012 C34.3530295,10.6018091 34.5654297,11.2280236 34.5654297,11.9848633 L34.5654297,11.9848633 Z M32.1264648,7.0703125 C32.1264648,6.80663931 32.08252,6.58447356 31.9946289,6.40380859 C31.9067378,6.22314363 31.7651377,6.07666072 31.5698242,5.96435547 C31.3403309,5.83251887 31.0620134,5.75073258 30.7348633,5.71899414 C30.4077132,5.6872557 30.0024438,5.67138672 29.519043,5.67138672 L27.7905273,5.67138672 L27.7905273,8.82080078 L29.6655273,8.82080078 C30.1196312,8.82080078 30.4809557,8.79760765 30.7495117,8.7512207 C31.0180677,8.70483375 31.2670887,8.60839917 31.496582,8.46191406 C31.7260754,8.31542896 31.8884273,8.12622186 31.9836426,7.89428711 C32.0788579,7.66235236 32.1264648,7.3876969 32.1264648,7.0703125 L32.1264648,7.0703125 Z M33.0566406,12.043457 C33.0566406,11.6040017 32.9907233,11.2548841 32.8588867,10.9960938 C32.7270501,10.7373034 32.4877947,10.517579 32.1411133,10.3369141 C31.9067371,10.2148431 31.6223161,10.1354982 31.2878418,10.098877 C30.9533675,10.0622557 30.5468774,10.0439453 30.0683594,10.0439453 L27.7905273,10.0439453 L27.7905273,14.1015625 L29.7094727,14.1015625 C30.3442415,14.1015625 30.8642558,14.0686038 31.2695312,14.0026855 C31.6748067,13.9367672 32.0068346,13.8159188 32.265625,13.6401367 C32.5390639,13.4497061 32.7392572,13.2324231 32.8662109,12.9882812 C32.9931647,12.7441394 33.0566406,12.4292011 33.0566406,12.043457 L33.0566406,12.043457 Z M42.8710938,15.3393555 L41.5014648,15.3393555 L41.5014648,14.4677734 C41.3793939,14.5507817 41.2146006,14.6667473 41.0070801,14.8156738 C40.7995595,14.9646004 40.5981455,15.0830074 40.402832,15.1708984 C40.1733387,15.2832037 39.9096695,15.3771969 39.6118164,15.4528809 C39.3139634,15.5285648 38.9648458,15.5664062 38.5644531,15.5664062 C37.8271448,15.5664062 37.202151,15.3222681 36.6894531,14.8339844 C36.1767552,14.3457007 35.9204102,13.7231483 35.9204102,12.9663086 C35.9204102,12.3461883 36.0534655,11.8444843 36.3195801,11.4611816 C36.5856947,11.0778789 36.9653296,10.7763683 37.4584961,10.5566406 C37.9565455,10.336913 38.554684,10.1879887 39.2529297,10.1098633 C39.9511754,10.0317379 40.7006796,9.97314473 41.5014648,9.93408203 L41.5014648,9.72167969 C41.5014648,9.40917813 41.4465338,9.15039165 41.3366699,8.9453125 C41.2268061,8.74023335 41.069337,8.57910215 40.8642578,8.46191406 C40.6689443,8.34960881 40.4345717,8.27392598 40.1611328,8.23486328 C39.8876939,8.19580059 39.6020523,8.17626953 39.3041992,8.17626953 C38.9428693,8.17626953 38.5400413,8.22387648 38.0957031,8.3190918 C37.651365,8.41430712 37.1923852,8.55224519 36.71875,8.73291016 L36.6455078,8.73291016 L36.6455078,7.33398438 C36.9140638,7.26074182 37.3022436,7.18017622 37.8100586,7.09228516 C38.3178736,7.00439409 38.8183569,6.96044922 39.3115234,6.96044922 C39.8876982,6.96044922 40.3894022,7.00805616 40.8166504,7.10327148 C41.2438986,7.1984868 41.613768,7.3608387 41.9262695,7.59033203 C42.2338883,7.81494253 42.4682609,8.10546697 42.6293945,8.46191406 C42.7905281,8.81836116 42.8710938,9.26025127 42.8710938,9.78759766 L42.8710938,15.3393555 Z M41.5014648,13.3251953 L41.5014648,11.0473633 C41.0815409,11.0717775 40.587161,11.1083982 40.0183105,11.1572266 C39.44946,11.2060549 38.9990251,11.276855 38.6669922,11.3696289 C38.2714824,11.4819342 37.9516614,11.656493 37.7075195,11.8933105 C37.4633777,12.1301281 37.3413086,12.4560526 37.3413086,12.8710938 C37.3413086,13.3398461 37.4829087,13.6926258 37.7661133,13.9294434 C38.0493178,14.1662609 38.4814424,14.284668 39.0625,14.284668 C39.5459009,14.284668 39.987791,14.1906748 40.3881836,14.0026855 C40.7885762,13.8146963 41.1596663,13.5888685 41.5014648,13.3251953 L41.5014648,13.3251953 Z M52.3632812,15.3393555 L50.9863281,15.3393555 L50.9863281,10.6811523 C50.9863281,10.3051739 50.9643557,9.95239423 50.9204102,9.62280273 C50.8764646,9.29321124 50.795899,9.03564546 50.6787109,8.85009766 C50.55664,8.64501851 50.3808605,8.49243214 50.1513672,8.39233398 C49.9218739,8.29223583 49.6240253,8.2421875 49.2578125,8.2421875 C48.8818341,8.2421875 48.4887716,8.33496001 48.0786133,8.52050781 C47.668455,8.70605562 47.2753925,8.94286965 46.8994141,9.23095703 L46.8994141,15.3393555 L45.5224609,15.3393555 L45.5224609,7.15820312 L46.8994141,7.15820312 L46.8994141,8.06640625 C47.3291037,7.70995916 47.7734352,7.43164163 48.2324219,7.23144531 C48.6914085,7.031249 49.1625952,6.93115234 49.6459961,6.93115234 C50.5297896,6.93115234 51.203611,7.19726296 51.6674805,7.72949219 C52.13135,8.26172141 52.3632812,9.02831531 52.3632812,10.0292969 L52.3632812,15.3393555 Z" fill="#FFFFFF" sketch:type="MSShapeGroup"></path><path id="Purge" d="M26.2561035,186.291992 C26.2561035,186.775393 26.1718758,187.223387 26.003418,187.635986 C25.8349601,188.048586 25.5993667,188.406248 25.2966309,188.708984 C24.9206524,189.084963 24.4763209,189.366942 23.963623,189.554932 C23.4509252,189.742921 22.803959,189.836914 22.0227051,189.836914 L20.5725098,189.836914 L20.5725098,193.901855 L19.1223145,193.901855 L19.1223145,182.996094 L22.0812988,182.996094 C22.735599,182.996094 23.2897927,183.051025 23.7438965,183.160889 C24.1980003,183.270753 24.6008283,183.44287 24.9523926,183.677246 C25.3674337,183.955568 25.6884754,184.302244 25.9155273,184.717285 C26.1425793,185.132326 26.2561035,185.657223 26.2561035,186.291992 L26.2561035,186.291992 Z M24.7473145,186.328613 C24.7473145,185.952635 24.6813971,185.62549 24.5495605,185.347168 C24.417724,185.068846 24.2175306,184.841798 23.9489746,184.666016 C23.7145984,184.514648 23.4472671,184.406006 23.1469727,184.340088 C22.8466782,184.27417 22.4670433,184.241211 22.0080566,184.241211 L20.5725098,184.241211 L20.5725098,188.599121 L21.7956543,188.599121 C22.3815947,188.599121 22.8576642,188.546631 23.223877,188.44165 C23.5900897,188.336669 23.8879383,188.169435 24.1174316,187.939941 C24.346925,187.705565 24.5092769,187.458986 24.6044922,187.200195 C24.6997075,186.941405 24.7473145,186.650881 24.7473145,186.328613 L24.7473145,186.328613 Z M34.8400879,193.901855 L33.4631348,193.901855 L33.4631348,192.993652 C32.9992653,193.359865 32.5549338,193.640624 32.130127,193.835938 C31.7053201,194.031251 31.2365748,194.128906 30.723877,194.128906 C29.8644977,194.128906 29.195559,193.866458 28.717041,193.341553 C28.238523,192.816648 27.9992676,192.046392 27.9992676,191.030762 L27.9992676,185.720703 L29.3762207,185.720703 L29.3762207,190.378906 C29.3762207,190.793947 29.3957518,191.149168 29.4348145,191.44458 C29.4738771,191.739992 29.5568841,191.992675 29.6838379,192.202637 C29.8156745,192.417482 29.9865712,192.57373 30.1965332,192.671387 C30.4064952,192.769043 30.7116679,192.817871 31.1120605,192.817871 C31.4685076,192.817871 31.857908,192.725099 32.2802734,192.539551 C32.7026388,192.354003 33.096922,192.117189 33.4631348,191.829102 L33.4631348,185.720703 L34.8400879,185.720703 L34.8400879,193.901855 Z M42.6550293,187.222168 L42.5817871,187.222168 C42.376708,187.17334 42.1777353,187.13794 41.9848633,187.115967 C41.7919912,187.093994 41.563722,187.083008 41.3000488,187.083008 C40.875242,187.083008 40.4650899,187.177001 40.0695801,187.36499 C39.6740703,187.552979 39.2932147,187.795897 38.927002,188.09375 L38.927002,193.901855 L37.5500488,193.901855 L37.5500488,185.720703 L38.927002,185.720703 L38.927002,186.929199 C39.4738797,186.489744 39.9560526,186.178468 40.3735352,185.995361 C40.7910177,185.812255 41.2170388,185.720703 41.6516113,185.720703 C41.8908703,185.720703 42.0642084,185.726807 42.1716309,185.739014 C42.2790533,185.751221 42.4401845,185.774414 42.6550293,185.808594 L42.6550293,187.222168 Z M50.5871582,192.97168 C50.5871582,194.358405 50.2722199,195.376462 49.642334,196.025879 C49.012448,196.675296 48.0432194,197 46.7346191,197 C46.3000467,197 45.8764669,196.969483 45.4638672,196.908447 C45.0512675,196.847412 44.6447774,196.760743 44.2443848,196.648438 L44.2443848,195.242188 L44.317627,195.242188 C44.5422375,195.330079 44.8986792,195.43872 45.3869629,195.568115 C45.8752466,195.69751 46.3635229,195.762207 46.8518066,195.762207 C47.320559,195.762207 47.7087387,195.706055 48.0163574,195.59375 C48.3239761,195.481445 48.5632316,195.325196 48.7341309,195.125 C48.9050302,194.934569 49.0270992,194.705079 49.1003418,194.436523 C49.1735844,194.167967 49.2102051,193.867677 49.2102051,193.535645 L49.2102051,192.788574 C48.7951639,193.120607 48.3984394,193.368407 48.0200195,193.531982 C47.6415997,193.695557 47.1594268,193.777344 46.5734863,193.777344 C45.5969189,193.777344 44.8217802,193.424564 44.2480469,192.718994 C43.6743135,192.013424 43.3874512,191.018561 43.3874512,189.734375 C43.3874512,189.031246 43.4863271,188.424563 43.684082,187.914307 C43.8818369,187.40405 44.1516096,186.963381 44.4934082,186.592285 C44.8107926,186.245604 45.1965309,185.975831 45.6506348,185.782959 C46.1047386,185.590087 46.5563942,185.493652 47.0056152,185.493652 C47.4792504,185.493652 47.875975,185.541259 48.1958008,185.636475 C48.5156266,185.73169 48.853758,185.876952 49.2102051,186.072266 L49.2980957,185.720703 L50.5871582,185.720703 L50.5871582,192.97168 Z M49.2102051,191.65332 L49.2102051,187.192871 C48.8439923,187.026855 48.5034195,186.908448 48.1884766,186.837646 C47.8735336,186.766845 47.559816,186.731445 47.2473145,186.731445 C46.4904747,186.731445 45.8947776,186.985349 45.4602051,187.493164 C45.0256326,188.000979 44.8083496,188.738276 44.8083496,189.705078 C44.8083496,190.623051 44.9694808,191.318845 45.291748,191.79248 C45.6140153,192.266116 46.1486779,192.50293 46.895752,192.50293 C47.2961446,192.50293 47.6977519,192.426026 48.1005859,192.272217 C48.50342,192.118407 48.8732893,191.912111 49.2102051,191.65332 L49.2102051,191.65332 Z M60.1452637,189.954102 L54.1174316,189.954102 C54.1174316,190.457034 54.1931145,190.895262 54.3444824,191.268799 C54.4958504,191.642336 54.7033678,191.948729 54.967041,192.187988 C55.2209485,192.422364 55.5224592,192.598144 55.871582,192.715332 C56.2207049,192.83252 56.6052225,192.891113 57.0251465,192.891113 C57.5817899,192.891113 58.142087,192.78003 58.7060547,192.557861 C59.2700224,192.335692 59.6716297,192.117189 59.9108887,191.902344 L59.9841309,191.902344 L59.9841309,193.403809 C59.5202614,193.599122 59.0466333,193.762695 58.5632324,193.894531 C58.0798316,194.026368 57.5720241,194.092285 57.0397949,194.092285 C55.6823663,194.092285 54.6228065,193.724857 53.861084,192.98999 C53.0993614,192.255123 52.7185059,191.211433 52.7185059,189.858887 C52.7185059,188.520989 53.0834924,187.458988 53.8134766,186.672852 C54.5434607,185.886715 55.5041444,185.493652 56.6955566,185.493652 C57.7990778,185.493652 58.6498994,185.815915 59.2480469,186.460449 C59.8461944,187.104984 60.1452637,188.020502 60.1452637,189.207031 L60.1452637,189.954102 Z M58.8049316,188.899414 C58.8000488,188.176754 58.6181659,187.617678 58.2592773,187.222168 C57.9003888,186.826658 57.35474,186.628906 56.6223145,186.628906 C55.8850061,186.628906 55.2978537,186.846189 54.8608398,187.280762 C54.4238259,187.715334 54.1760257,188.25488 54.1174316,188.899414 L58.8049316,188.899414 Z" fill="#FFFFFF" sketch:type="MSShapeGroup"></path></svg><div class="cursor"></div></div>'), e.join("")
            }

            t.exports = n
        }, {}],
        62: [function (e, t) {
            function n(e) {
                var t = [], n = e || {};
                return function (e) {
                    t.push('<div id="bttv-poll-contain"><div class="title">New poll available! <span style="text-decoration: underline;">Vote now!</span></div><div class="close"><svg height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px" class="svg-close"><path clip-rule="evenodd" d="M13.657,3.757L9.414,8l4.243,4.242l-1.415,1.415L8,9.414l-4.243,4.243l-1.414-1.415L6.586,8L2.343,3.757l1.414-1.414L8,6.586l4.242-4.243L13.657,3.757z" fill-rule="evenodd"></path></svg></div><iframe' + jade.attr("src", "https://strawpoll.me/embed_2/" + e, !0, !1) + ' class="frame"></iframe></div>')
                }.call(this, "pollId"in n ? n.pollId : "undefined" != typeof pollId ? pollId : void 0), t.join("")
            }

            t.exports = n
        }, {}],
        63: [function (t, n) {
            function a(n) {
                var a, o = [], s = n || {};
                return function (e, t, n, s, i, r, c) {
                    var l = e("../vars");
                    o.push("<div" + jade.attr("data-user", t.name, !0, !1) + jade.attr("style", "top: " + n + "px;left: " + s + "px;", !0, !1) + ' class="bttv-mod-card ember-view moderation-card"><div class="close-button"><svg height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px" class="svg-close"><path clip-rule="evenodd" d="M13.657,3.757L9.414,8l4.243,4.242l-1.415,1.415L8,9.414l-4.243,4.243l-1.414-1.415L6.586,8L2.343,3.757l1.414-1.414L8,6.586l4.242-4.243L13.657,3.757z" fill-rule="evenodd"></path></svg></div><div' + jade.attr("style", "background-color: " + (t.profile_banner_background_color ? t.profile_banner_background_color : "#000"), !0, !1) + ' class="card-header"><img' + jade.attr("src", t.logo ? t.logo : "https://www-cdn.jtvnw.net/images/xarth/404_user_300x300.png", !0, !1) + ' class="channel_logo"/><div class="drag-handle"></div>'), i.storage.getObject("nicknames")[t.name.toLowerCase()] && o.push('<h4 class="real-name">' + jade.escape(null == (a = t.display_name) ? "" : a) + "</h4>"), o.push('<h3 class="name"><a' + jade.attr("href", r.url.profile(t.name), !0, !1) + ' target="_blank">' + jade.escape(null == (a = i.storage.getObject("nicknames")[t.name.toLowerCase()] || t.display_name) ? "" : a) + '</a><svg height="10px" width="10px" version="1.1" viewBox="0 0 16 16" x="0px" y="0px" class="svg-edit mod-card-edit"><path clip-rule="evenodd" fill-rule="evenodd" d="M6.414,12.414L3.586,9.586l8-8l2.828,2.828L6.414,12.414z M4.829,14H2l0,0v-2.828l0.586-0.586l2.828,2.828L4.829,14z"></path></svg></h3><h4 class="created-at">' + jade.escape(null == (a = "Created " + c.parse(t.created_at).toString("MMM d, yyyy")) ? "" : a) + '</h4><div class="channel_background_cover"></div>'), t.profile_banner && o.push("<img" + jade.attr("src", t.profile_banner, !0, !1) + ' class="channel_background"/>'), o.push('<div class="channel-stats"><span class="stat">' + jade.escape(null == (a = r.display.commatize(t.views)) ? "" : a) + '<svg height="16px" version="1.1" viewbox="1 1 16 16" width="16px" x="0px" y="0px" class="svg-glyph_views"><path clip-rule="evenodd" d="M11,13H5L1,9V8V7l4-4h6l4,4v1v1L11,13z M8,5C6.344,5,5,6.343,5,8c0,1.656,1.344,3,3,3c1.657,0,3-1.344,3-3C11,6.343,9.657,5,8,5z M8,9C7.447,9,7,8.552,7,8s0.447-1,1-1s1,0.448,1,1S8.553,9,8,9z" fill-rule="evenodd"></path></svg></span><span class="stat">' + jade.escape(null == (a = r.display.commatize(t.followers)) ? "" : a) + '<svg height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px" class="svg-glyph_followers"><path clip-rule="evenodd" d="M8,13.5L1.5,7V4l2-2h3L8,3.5L9.5,2h3l2,2v3L8,13.5z" fill-rule="evenodd"></path></svg></span></div></div>'), t.name != l.userData.name && (o.push('<div class="interface"><div class="btn-wrapper"><button class="button-simple primary mod-card-follow">Follow</button><button style="height: 30px;vertical-align: top;" title="View user\'s profile" class="button-simple dark mod-card-profile"><img src="https://www-cdn.jtvnw.net/images/xarth/g/g18_person-00000080.png" style="margin-top: 6px;"/></button><button style="height: 30px;vertical-align: top;" title="Send user a message" class="button-simple dark mod-card-message"><img src="https://www-cdn.jtvnw.net/images/xarth/g/g18_mail-00000080.png" style="margin-top: 6px;"/></button><button title="Add/Remove user from ignores" class="button-simple dark mod-card-ignore"><svg height="16px" width="16px" version="1.1" viewBox="0 0 16 16" x="0px" y="0px" class="svg-ignore"><path clip-rule="evenodd" fill-rule="evenodd" d="M13,11.341V16l-3.722-3.102C8.863,12.959,8.438,13,8,13c-3.866,0-7-2.462-7-5.5C1,4.462,4.134,2,8,2s7,2.462,7,5.5C15,8.996,14.234,10.35,13,11.341z M11,7H5v1h6V7z"></path></svg><svg style="display: none;" height="16px" width="16px" version="1.1" viewBox="0 0 16 16" x="0px" y="0px" class="svg-unignore"><path clip-rule="evenodd" fill-rule="evenodd" d="M13,11.341V16l-3.722-3.102C8.863,12.959,8.438,13,8,13c-3.866,0-7-2.462-7-5.5C1,4.462,4.134,2,8,2s7,2.462,7,5.5C15,8.996,14.234,10.35,13,11.341z"></path></svg></button>'), l.userData.isLoggedIn && (i.chat.helpers.isOwner(l.userData.name) || i.chat.helpers.isStaff(l.userData.name) || i.chat.helpers.isAdmin(l.userData.name)) && o.push('<button title="Add/Remove this user as a moderator" class="button-simple dark mod-card-mod"><svg height="16px" width="16px" version="1.1" viewBox="0 0 16 16" x="0px" y="0px" class="svg-add-mod"><path clip-rule="evenodd" fill-rule="evenodd" d="M15,7L1,16l4.666-7H1l14-9l-4.667,7H15z"></path></svg><svg style="display: none;" height="16px" width="16px" version="1.1" viewBox="0 0 16 16" x="0px" y="0px" class="svg-remove-mod"><path clip-rule="evenodd" fill-rule="evenodd" d="M 1.7692223,7.3226542 14.725057,7.3226542 14.725057,8.199533 1.7692223,8.199533 z M 15,0 5.4375,6.15625 10.90625,6.15625 15,0 z M 5.375,9.40625 1,16 11.25,9.40625 5.375,9.40625 z"></path></svg></button>'), !l.userData.isLoggedIn || !i.chat.helpers.isModerator(l.userData.name) || i.chat.helpers.isModerator(t.name) && l.userData.name !== i.getChannel() || o.push('<span class="mod-controls"><button title="!permit this user" class="permit button-simple light"><svg height="16px" width="16px" version="1.1" viewBox="0 0 16 16" x="0px" y="0px" class="svg-permit"><path clip-rule="evenodd" fill-rule="evenodd" d="M 13.71875,3.75 A 0.750075,0.750075 0 0 0 13.28125,4 L 5.71875,11.90625 3.59375,9.71875 A 0.750075,0.750075 0 1 0 2.53125,10.75 L 5.21875,13.53125 A 0.750075,0.750075 0 0 0 6.28125,13.5 L 14.34375,5.03125 A 0.750075,0.750075 0 0 0 13.71875,3.75 z M 4.15625,5.15625 C 2.1392444,5.1709094 0.53125,6.2956115 0.53125,7.6875 0.53125,8.1957367 0.75176764,8.6679042 1.125,9.0625 A 1.60016,1.60016 0 0 1 2.15625,8.25 C 2.0893446,8.0866555 2.0625,7.9078494 2.0625,7.71875 2.0625,6.9200694 2.7013192,6.25 3.5,6.25 L 7.15625,6.25 C 7.1438569,5.1585201 6.6779611,5.1379224 4.15625,5.15625 z M 9.625,5.15625 C 8.4334232,5.1999706 8.165545,5.4313901 8.15625,6.25 L 9.96875,6.25 11.03125,5.15625 C 10.471525,5.1447549 9.9897684,5.1428661 9.625,5.15625 z M 14.28125,6.40625 13.3125,7.40625 C 13.336036,7.5094042 13.34375,7.6089314 13.34375,7.71875 13.34375,8.5174307 12.67368,9.125 11.875,9.125 L 11.65625,9.125 10.65625,10.1875 C 10.841425,10.189327 10.941084,10.186143 11.15625,10.1875 13.17327,10.200222 14.78125,9.0793881 14.78125,7.6875 14.78125,7.2160918 14.606145,6.7775069 14.28125,6.40625 z M 4.40625,7.1875 C 4.0977434,7.1875 3.84375,7.4414933 3.84375,7.75 3.84375,8.0585065 4.0977434,8.3125 4.40625,8.3125 L 8,8.3125 9.0625,7.1875 4.40625,7.1875 z M 4.125,9.125 5.15625,10.1875 C 5.5748133,10.180859 5.9978157,10.155426 6.25,10.125 L 7.15625,9.1875 C 7.1572971,9.1653754 7.1553832,9.1481254 7.15625,9.125 L 4.125,9.125 z"></path></svg></button></span><br/><span class="mod-controls"><button style="width:44px;" data-time="1" title="Clear this user\'s chat" class="timeout button-simple light">Purge</button><button data-time="600" title="Temporary 10 minute ban" class="timeout button-simple light"><img src="/images/xarth/g/g18_timeout-00000080.png"/></button><button style="width:30px;" data-time="3600" title="Temporary 1 hour ban" class="timeout button-simple light">1hr</button><button style="width:30px;" data-time="28800" title="Temporary 8 hour ban" class="timeout button-simple light">8hr</button><button style="width:38px;" data-time="86400" title="Temporary 24 hour ban" class="timeout button-simple light">24hr</button><button title="Permanent Ban" class="ban button-simple light"><img src="/images/xarth/g/g18_ban-00000080.png"/></button></span>'), o.push('</div><br/><div class="user-messages"><div class="label"><span>Chat Messages</span><div class="triangle closed"></div></div><div class="message-list chat-messages">'), function () {
                        var e = t.messages;
                        if ("number" == typeof e.length)for (var n = 0, s = e.length; s > n; n++) {
                            var i = e[n];
                            o.push("<div>" + (null == (a = i.outerHTML) ? "" : a) + "</div>")
                        } else {
                            var s = 0;
                            for (var n in e) {
                                s++;
                                var i = e[n];
                                o.push("<div>" + (null == (a = i.outerHTML) ? "" : a) + "</div>")
                            }
                        }
                    }.call(this), o.push("</div></div></div>")), o.push("</div>")
                }.call(this, "require"in s ? s.require : "undefined" != typeof t ? t : void 0, "user"in s ? s.user : "undefined" != typeof user ? user : void 0, "top"in s ? s.top : "undefined" != typeof top ? top : void 0, "left"in s ? s.left : "undefined" != typeof left ? left : void 0, "bttv"in s ? s.bttv : "undefined" != typeof e ? e : void 0, "Twitch"in s ? s.Twitch : "undefined" != typeof Twitch ? Twitch : void 0, "Date"in s ? s.Date : "undefined" != typeof Date ? Date : void 0), o.join("")
            }

            n.exports = a
        }, {"../vars": 68}],
        64: [function (e, t) {
            function n(e) {
                var t, n = [], a = e || {};
                return function (e, a, o) {
                    n.push('<div id="bttv-pinned-highlight"><span class="close"><svg height="8px" version="1.1" viewbox="0 0 16 16" width="8px" x="0px" y="0px" class="svg-close"><path clip-rule="evenodd" d="M13.657,3.757L9.414,8l4.243,4.242l-1.415,1.415L8,9.414l-4.243,4.243l-1.414-1.415L6.586,8L2.343,3.757l1.414-1.414L8,6.586l4.242-4.243L13.657,3.757z" fill-rule="evenodd"></path></svg></span><span class="time">' + jade.escape(null == (t = e) ? "" : t) + '</span><span class="display-name">' + jade.escape(null == (t = a) ? "" : t) + ':</span><span class="message">' + jade.escape(null == (t = o) ? "" : t) + "</span></div>")
                }.call(this, "time"in a ? a.time : "undefined" != typeof time ? time : void 0, "displayName"in a ? a.displayName : "undefined" != typeof displayName ? displayName : void 0, "message"in a ? a.message : "undefined" != typeof message ? message : void 0), n.join("")
            }

            t.exports = n
        }, {}],
        65: [function (e, t) {
            function n(e) {
                var t, n = [], a = e || {};
                return function (e, a, o) {
                    n.push("<div" + jade.cls(["option", "bttvOption-" + e], [null, !0]) + '><span style="font-weight:bold;font-size:14px;color:#D3D3D3;">' + jade.escape(null == (t = a) ? "" : t) + "</span>&nbsp;&nbsp;&mdash;&nbsp;&nbsp;" + jade.escape(null == (t = o) ? "" : t) + '<div class="bttv-switch"><input type="radio"' + jade.attr("name", e, !0, !1) + ' value="false"' + jade.attr("id", "" + e + "False", !0, !1) + ' class="bttv-switch-input bttv-switch-off"/><label' + jade.attr("for", "" + e + "False", !0, !1) + ' class="bttv-switch-label bttv-switch-label-off">Off</label><input type="radio"' + jade.attr("name", e, !0, !1) + ' value="true"' + jade.attr("id", "" + e + "True", !0, !1) + ' class="bttv-switch-input"/><label' + jade.attr("for", "" + e + "True", !0, !1) + ' class="bttv-switch-label bttv-switch-label-on">On</label><span class="bttv-switch-selection"></span></div></div>')
                }.call(this, "storageKey"in a ? a.storageKey : "undefined" != typeof storageKey ? storageKey : void 0, "name"in a ? a.name : "undefined" != typeof name ? name : void 0, "description"in a ? a.description : "undefined" != typeof description ? description : void 0), n.join("")
            }

            t.exports = n
        }, {}],
        66: [function (t, n) {
            function a(t) {
                var n, a = [], o = t || {};
                return function (e) {
                    a.push('<div id="header"><span id="logo"><img height="45px" src="https://cdn.betterttv.net/style/logos/settings_logo.png"/></span><ul class="nav"><li><a href="#bttvAbout">About</a></li><li class="active"><a href="#bttvSettings">Settings</a></li><li><a href="#bttvChannel" target="_blank">Channel</a></li><li><a href="#bttvChangelog">Changelog</a></li><li><a href="#bttvPrivacy">Privacy Policy</a></li><li><a href="#bttvBackup">Backup/Import</a></li></ul><span id="close">&times;</span></div><div id="bttvSettings" style="height:425px;" class="scroll scroll-dark"><div class="tse-content options-list"><h2 class="option">Here you can manage the various BetterTTV options. Click On or Off to toggle settings.</h2></div></div><div id="bttvAbout" style="display:none;"><div class="aboutHalf"><img src="https://cdn.betterttv.net/style/logos/mascot.png" class="bttvAboutIcon"/><h1>BetterTTV v' + jade.escape(null == (n = e.info.versionString()) ? "" : n) + '</h1><h2>from your friends at <a href="https://www.nightdev.com" target="_blank">NightDev</a></h2><br/></div><div class="aboutHalf"><h1 style="margin-top: 100px;">Think this addon is awesome?</h1><br/><br/><h2><a target="_blank" href="https://chrome.google.com/webstore/detail/ajopnjidmegmdimjlfnijceegpefgped">Drop a Review on the Chrome Webstore</a></h2><br/><h2>or maybe</h2><br/><h2><a target="_blank" href="https://streamtip.com/t/night">Send us a Tip</a></h2><br/></div></div><div id="bttvChannel" style="display:none;"><iframe frameborder="0" width="100%" height="425"></iframe></div><div id="bttvPrivacy" style="display:none;height:425px;" class="scroll scroll-dark"><div class="tse-content"></div></div><div id="bttvChangelog" style="display:none;height:425px;" class="scroll scroll-dark"><div class="tse-content"></div></div><div id="bttvBackup" style="display:none;height:425px;padding:25px;"><h1 style="padding-bottom:15px;">Backup Settings</h1><button id="bttvBackupButton" class="primary_button"><span>Download</span></button><h1 style="padding-top:25px;padding-bottom:15px;">Import Settings</h1><input id="bttvImportInput" type="file" style="height: 25px;width: 250px;"/></div><div id="footer"><span>BetterTTV &copy; <a href="https://www.nightdev.com" target="_blank">NightDev, LLC</a> 2015</span><span style="float:right;"><a href="https://twitter.com/betterttv" target="_blank">Twitter</a> | <a href="https://community.nightdev.com/c/betterttv" target="_blank">Forums</a> | <a href="https://github.com/night/BetterTTV/issues/new?labels=bug" target="_blank">Bug Report</a> | <a href="https://streamtip.com/t/night" target="_blank">Tip Us</a></span></div>')
                }.call(this, "bttv"in o ? o.bttv : "undefined" != typeof e ? e : void 0), a.join("")
            }

            n.exports = a
        }, {}],
        67: [function (e, t) {
            vars = e("./vars"), t.exports = {
                _setHeaders: function (e) {
                    e.headers || (e.headers = {}), e.headers["Client-ID"] = "6x8avioex0zt85ht6py4sq55z6avsea", e.auth && vars.userData.isLoggedIn && (e.headers.Authorization = "OAuth " + vars.userData.oauthToken), delete e.auth
                }, _call: function (e, t, n, a) {
                    return a || (a = {}), this._setHeaders(a), window.Twitch.api[e].call(this, t, n, a)
                }, get: function (e, t, n) {
                    return this._call("get", e, t, n)
                }, post: function (e, t, n) {
                    return this._call("post", e, t, n)
                }, put: function (e, t, n) {
                    return this._call("put", e, t, n)
                }, del: function (e, t, n) {
                    return this._call("del", e, t, n)
                }
            }
        }, {"./vars": 68}],
        68: [function (e, t) {
            t.exports = {
                userData: {isLoggedIn: !1, name: "", displayName: "", oauthToken: ""},
                settings: {},
                liveChannels: [],
                blackChat: !1
            }
        }, {}],
        69: [function (t, n) {
            function a() {
                this.socket = !1, this._lookedUpUsers = [], this._connected = !1, this._connecting = !1, this._connectAttempts = 1, this._joinedChannel = null, this._events = i, this.connect()
            }

            var o = t("./helpers/debug"), s = t("./vars"), i = {};
            i.alert = function (t) {
                "chat" === t.type ? e.chat.helpers.serverMessage(t.message) : "growl" === t.type && e.notify(t.message.text, {
                    title: t.message.title,
                    url: t.message.url,
                    image: t.message.image,
                    tag: t.message.tag,
                    permanent: t.message.permanent
                })
            }, i.new_subscriber = function (t) {
                t.channel === e.getChannel() && (e.chat.helpers.notifyMessage("subscriber", e.chat.helpers.lookupDisplayName(t.user) + " just subscribed!"), e.chat.store.__subscriptions[t.user] = ["night"], e.chat.helpers.reparseMessages(t.user))
            }, i.new_spammer = function (t) {
                e.chat.store.spammers.push(t.name)
            }, i.commercial = function (t) {
                t.channel === e.getChannel() && s.userData.isLoggedIn && e.chat.helpers.isModerator(s.userData.name) && e.chat.helpers.notifyMessage("bot", t.message)
            }, i.lookup_user = function (t) {
                t.subscribed && (e.chat.store.__subscriptions[t.name] = ["night"], t.glow && e.chat.store.__subscriptions[t.name].push("_glow"), e.chat.helpers.reparseMessages(t.name))
            }, a.prototype.connect = function () {
                if (!this._connected && !this._connecting) {
                    this._connecting = !0, o.log("SocketClient: Connecting to Beta BetterTTV Socket Server");
                    var e = this;
                    this.socket = new WebSocket("wss://sockets-beta.betterttv.net/ws"), this.socket.onopen = function () {
                        o.log("SocketClient: Connected to Beta BetterTTV Socket Server"), e._connected = !0, e._connectAttempts = 1, e.joinChannel()
                    }, this.socket.onerror = function () {
                        o.log("SocketClient: Error from Beta BetterTTV Socket Server"), e._connectAttempts++, e.reconnect()
                    }, this.socket.onclose = function () {
                        e._connected && e.socket && (o.log("SocketClient: Disconnected from Beta BetterTTV Socket Server"), e._connectAttempts++, e.reconnect())
                    }, this.socket.onmessage = function (t) {
                        var n;
                        try {
                            n = JSON.parse(t.data)
                        } catch (a) {
                            o.log("SocketClient: Error Parsing Message", a)
                        }
                        n && n.name in e._events && (o.log("SocketClient: Received Event", n), e._events[n.name](n.data))
                    }
                }
            }, a.prototype.reconnect = function () {
                var e = this;
                if (this.socket)try {
                    this.socket.close()
                } catch (t) {
                }
                delete this.socket, this._connected = !1, this._connecting !== !1 && (this._connecting = !1, setTimeout(function () {
                    e.connect()
                }, Math.random() * (Math.pow(2, this._connectAttempts) - 1) * 3e4))
            }, a.prototype.emit = function (e, t) {
                this._connected && this.socket && this.socket.send(JSON.stringify({name: e, data: t}))
            }, a.prototype.broadcastMe = function () {
                this._connected && s.userData.isLoggedIn && this.emit("broadcast_me", {
                    name: s.userData.name,
                    channel: e.getChannel()
                })
            }, a.prototype.joinChannel = function () {
                if (this._connected) {
                    var t = e.getChannel();
                    if (t.length && (this._joinedChannel && this.emit("part_channel", {name: this._joinedChannel}), this.emit("join_channel", {name: t}), this._joinedChannel = t, "night" === t)) {
                        var n = document.createElement("style");
                        n.type = "text/css", n.innerHTML = '.badge.subscriber { background-image: url("https://cdn.betterttv.net/tags/subscriber.png") !important; }', e.jQuery(".ember-chat .chat-room").append(n)
                    }
                }
            }, n.exports = a
        }, {"./helpers/debug": 47, "./vars": 68}],
        70: [function (e, t, n) {
            !function (e, a) {
                "use strict";
                var o = function (e) {
                    if ("object" != typeof e.document)throw new Error("Cookies.js requires a `window` with a `document` object");
                    var t = function (e, n, a) {
                        return 1 === arguments.length ? t.get(e) : t.set(e, n, a)
                    };
                    return t._document = e.document, t._cacheKeyPrefix = "cookey.", t._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"), t.defaults = {
                        path: "/",
                        secure: !1
                    }, t.get = function (e) {
                        t._cachedDocumentCookie !== t._document.cookie && t._renewCache();
                        var n = t._cache[t._cacheKeyPrefix + e];
                        return n === a ? a : decodeURIComponent(n)
                    }, t.set = function (e, n, o) {
                        return o = t._getExtendedOptions(o), o.expires = t._getExpiresDate(n === a ? -1 : o.expires), t._document.cookie = t._generateCookieString(e, n, o), t
                    }, t.expire = function (e, n) {
                        return t.set(e, a, n)
                    }, t._getExtendedOptions = function (e) {
                        return {
                            path: e && e.path || t.defaults.path,
                            domain: e && e.domain || t.defaults.domain,
                            expires: e && e.expires || t.defaults.expires,
                            secure: e && e.secure !== a ? e.secure : t.defaults.secure
                        }
                    }, t._isValidDate = function (e) {
                        return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
                    }, t._getExpiresDate = function (e, n) {
                        if (n = n || new Date, "number" == typeof e ? e = 1 / 0 === e ? t._maxExpireDate : new Date(n.getTime() + 1e3 * e) : "string" == typeof e && (e = new Date(e)), e && !t._isValidDate(e))throw new Error("`expires` parameter cannot be converted to a valid Date instance");
                        return e
                    }, t._generateCookieString = function (e, t, n) {
                        e = e.replace(/[^#$&+\^`|]/g, encodeURIComponent), e = e.replace(/\(/g, "%28").replace(/\)/g, "%29"), t = (t + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent), n = n || {};
                        var a = e + "=" + t;
                        return a += n.path ? ";path=" + n.path : "", a += n.domain ? ";domain=" + n.domain : "", a += n.expires ? ";expires=" + n.expires.toUTCString() : "", a += n.secure ? ";secure" : ""
                    }, t._getCacheFromString = function (e) {
                        for (var n = {}, o = e ? e.split("; ") : [], s = 0; s < o.length; s++) {
                            var i = t._getKeyValuePairFromCookieString(o[s]);
                            n[t._cacheKeyPrefix + i.key] === a && (n[t._cacheKeyPrefix + i.key] = i.value)
                        }
                        return n
                    }, t._getKeyValuePairFromCookieString = function (e) {
                        var t = e.indexOf("=");
                        t = 0 > t ? e.length : t;
                        var n, a = e.substr(0, t);
                        try {
                            n = decodeURIComponent(a)
                        } catch (o) {
                            console && "function" == typeof console.error && console.error('Could not decode cookie with key "' + a + '"', o)
                        }
                        return {key: n, value: e.substr(t + 1)}
                    }, t._renewCache = function () {
                        t._cache = t._getCacheFromString(t._document.cookie), t._cachedDocumentCookie = t._document.cookie
                    }, t._areEnabled = function () {
                        var e = "cookies.js", n = "1" === t.set(e, 1).get(e);
                        return t.expire(e), n
                    }, t.enabled = t._areEnabled(), t
                }, s = "object" == typeof e.document ? o(e) : o;
                "function" == typeof define && define.amd ? define(function () {
                    return s
                }) : "object" == typeof n ? ("object" == typeof t && "object" == typeof t.exports && (n = t.exports = s), n.Cookies = s) : e.Cookies = s
            }("undefined" == typeof window ? this : window)
        }, {}],
        71: [function (e, t) {
            function n() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function a(e) {
                return "function" == typeof e
            }

            function o(e) {
                return "number" == typeof e
            }

            function s(e) {
                return "object" == typeof e && null !== e
            }

            function i(e) {
                return void 0 === e
            }

            t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (e) {
                if (!o(e) || 0 > e || isNaN(e))throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, n.prototype.emit = function (e) {
                var t, n, o, r, c, l;
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
                    if (t = arguments[1], t instanceof Error)throw t;
                    throw TypeError('Uncaught, unspecified "error" event.')
                }
                if (n = this._events[e], i(n))return !1;
                if (a(n))switch (arguments.length) {
                    case 1:
                        n.call(this);
                        break;
                    case 2:
                        n.call(this, arguments[1]);
                        break;
                    case 3:
                        n.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        for (o = arguments.length, r = new Array(o - 1), c = 1; o > c; c++)r[c - 1] = arguments[c];
                        n.apply(this, r)
                } else if (s(n)) {
                    for (o = arguments.length, r = new Array(o - 1), c = 1; o > c; c++)r[c - 1] = arguments[c];
                    for (l = n.slice(), o = l.length, c = 0; o > c; c++)l[c].apply(this, r)
                }
                return !0
            }, n.prototype.addListener = function (e, t) {
                var o;
                if (!a(t))throw TypeError("listener must be a function");
                if (this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, a(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned) {
                    var o;
                    o = i(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, o && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())
                }
                return this
            }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (e, t) {
                function n() {
                    this.removeListener(e, n), o || (o = !0, t.apply(this, arguments))
                }

                if (!a(t))throw TypeError("listener must be a function");
                var o = !1;
                return n.listener = t, this.on(e, n), this
            }, n.prototype.removeListener = function (e, t) {
                var n, o, i, r;
                if (!a(t))throw TypeError("listener must be a function");
                if (!this._events || !this._events[e])return this;
                if (n = this._events[e], i = n.length, o = -1, n === t || a(n.listener) && n.listener === t)delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t); else if (s(n)) {
                    for (r = i; r-- > 0;)if (n[r] === t || n[r].listener && n[r].listener === t) {
                        o = r;
                        break
                    }
                    if (0 > o)return this;
                    1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }, n.prototype.removeAllListeners = function (e) {
                var t, n;
                if (!this._events)return this;
                if (!this._events.removeListener)return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                if (0 === arguments.length) {
                    for (t in this._events)"removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (n = this._events[e], a(n))this.removeListener(e, n); else for (; n.length;)this.removeListener(e, n[n.length - 1]);
                return delete this._events[e], this
            }, n.prototype.listeners = function (e) {
                var t;
                return t = this._events && this._events[e] ? a(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, n.listenerCount = function (e, t) {
                var n;
                return n = e._events && e._events[t] ? a(e._events[t]) ? 1 : e._events[t].length : 0
            }
        }, {}],
        72: [function (e, t, n) {
            (function (e) {
                !function (a) {
                    function o(e) {
                        throw RangeError(O[e])
                    }

                    function s(e, t) {
                        for (var n = e.length; n--;)e[n] = t(e[n]);
                        return e
                    }

                    function i(e, t) {
                        return s(e.split(E), t).join(".")
                    }

                    function r(e) {
                        for (var t, n, a = [], o = 0, s = e.length; s > o;)t = e.charCodeAt(o++), t >= 55296 && 56319 >= t && s > o ? (n = e.charCodeAt(o++), 56320 == (64512 & n) ? a.push(((1023 & t) << 10) + (1023 & n) + 65536) : (a.push(t), o--)) : a.push(t);
                        return a
                    }

                    function c(e) {
                        return s(e, function (e) {
                            var t = "";
                            return e > 65535 && (e -= 65536, t += R(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += R(e)
                        }).join("")
                    }

                    function l(e) {
                        return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : C
                    }

                    function d(e, t) {
                        return e + 22 + 75 * (26 > e) - ((0 != t) << 5)
                    }

                    function h(e, t, n) {
                        var a = 0;
                        for (e = n ? j(e / T) : e >> 1, e += j(e / t); e > N * x >> 1; a += C)e = j(e / N);
                        return j(a + (N + 1) * e / (e + $))
                    }

                    function u(e) {
                        var t, n, a, s, i, r, d, u, g, p, m = [], f = e.length, v = 0, b = M, y = S;
                        for (n = e.lastIndexOf(L), 0 > n && (n = 0), a = 0; n > a; ++a)e.charCodeAt(a) >= 128 && o("not-basic"), m.push(e.charCodeAt(a));
                        for (s = n > 0 ? n + 1 : 0; f > s;) {
                            for (i = v, r = 1, d = C; s >= f && o("invalid-input"), u = l(e.charCodeAt(s++)), (u >= C || u > j((_ - v) / r)) && o("overflow"), v += u * r, g = y >= d ? k : d >= y + x ? x : d - y, !(g > u); d += C)p = C - g, r > j(_ / p) && o("overflow"), r *= p;
                            t = m.length + 1, y = h(v - i, t, 0 == i), j(v / t) > _ - b && o("overflow"), b += j(v / t), v %= t, m.splice(v++, 0, b)
                        }
                        return c(m)
                    }

                    function g(e) {
                        var t, n, a, s, i, c, l, u, g, p, m, f, v, b, y, w = [];
                        for (e = r(e), f = e.length, t = M, n = 0, i = S, c = 0; f > c; ++c)m = e[c], 128 > m && w.push(R(m));
                        for (a = s = w.length, s && w.push(L); f > a;) {
                            for (l = _, c = 0; f > c; ++c)m = e[c], m >= t && l > m && (l = m);
                            for (v = a + 1, l - t > j((_ - n) / v) && o("overflow"), n += (l - t) * v, t = l, c = 0; f > c; ++c)if (m = e[c], t > m && ++n > _ && o("overflow"), m == t) {
                                for (u = n, g = C; p = i >= g ? k : g >= i + x ? x : g - i, !(p > u); g += C)y = u - p, b = C - p, w.push(R(d(p + y % b, 0))), u = j(y / b);
                                w.push(R(d(u, 0))), i = h(n, v, a == s), n = 0, ++a
                            }
                            ++n, ++t
                        }
                        return w.join("")
                    }

                    function p(e) {
                        return i(e, function (e) {
                            return A.test(e) ? u(e.slice(4).toLowerCase()) : e
                        })
                    }

                    function m(e) {
                        return i(e, function (e) {
                            return D.test(e) ? "xn--" + g(e) : e
                        })
                    }

                    var f = "object" == typeof n && n, v = "object" == typeof t && t && t.exports == f && t, b = "object" == typeof e && e;
                    (b.global === b || b.window === b) && (a = b);
                    var y, w, _ = 2147483647, C = 36, k = 1, x = 26, $ = 38, T = 700, S = 72, M = 128, L = "-", A = /^xn--/, D = /[^ -~]/, E = /\x2E|\u3002|\uFF0E|\uFF61/g, O = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    }, N = C - k, j = Math.floor, R = String.fromCharCode;
                    if (y = {
                            version: "1.2.4",
                            ucs2: {decode: r, encode: c},
                            decode: u,
                            encode: g,
                            toASCII: m,
                            toUnicode: p
                        }, "function" == typeof define && "object" == typeof define.amd && define.amd)define("punycode", function () {
                        return y
                    }); else if (f && !f.nodeType)if (v)v.exports = y; else for (w in y)y.hasOwnProperty(w) && (f[w] = y[w]); else a.punycode = y
                }(this)
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        73: [function (e, t) {
            function n(e, t, n) {
                var i = !0, r = !0;
                if ("function" != typeof e)throw new TypeError(s);
                return n === !1 ? i = !1 : a(n) && (i = "leading"in n ? !!n.leading : i, r = "trailing"in n ? !!n.trailing : r), o(e, t, {
                    leading: i,
                    maxWait: +t,
                    trailing: r
                })
            }

            function a(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            var o = e("lodash.debounce"), s = "Expected a function";
            t.exports = n
        }, {"lodash.debounce": 74}],
        74: [function (e, t) {
            function n(e, t, n) {
                function o() {
                    v && clearTimeout(v), g && clearTimeout(g), y = 0, g = v = b = void 0
                }

                function r(t, n) {
                    n && clearTimeout(n), g = v = b = void 0, t && (y = c(), p = e.apply(f, u), v || g || (u = f = void 0))
                }

                function l() {
                    var e = t - (c() - m);
                    0 >= e || e > t ? r(b, g) : v = setTimeout(l, e)
                }

                function d() {
                    r(_, v)
                }

                function h() {
                    if (u = arguments, m = c(), f = this, b = _ && (v || !C), w === !1)var n = C && !v; else {
                        g || C || (y = m);
                        var a = w - (m - y), o = 0 >= a || a > w;
                        o ? (g && (g = clearTimeout(g)), y = m, p = e.apply(f, u)) : g || (g = setTimeout(d, a))
                    }
                    return o && v ? v = clearTimeout(v) : v || t === w || (v = setTimeout(l, t)), n && (o = !0, p = e.apply(f, u)), !o || v || g || (u = f = void 0), p
                }

                var u, g, p, m, f, v, b, y = 0, w = !1, _ = !0;
                if ("function" != typeof e)throw new TypeError(s);
                if (t = 0 > t ? 0 : +t || 0, n === !0) {
                    var C = !0;
                    _ = !1
                } else a(n) && (C = !!n.leading, w = "maxWait"in n && i(+n.maxWait || 0, t), _ = "trailing"in n ? !!n.trailing : _);
                return h.cancel = o, h
            }

            function a(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            var o = e("lodash._getnative"), s = "Expected a function", i = Math.max, r = o(Date, "now"), c = r || function () {
                    return (new Date).getTime()
                };
            t.exports = n
        }, {"lodash._getnative": 75}],
        75: [function (e, t) {
            function n(e) {
                return !!e && "object" == typeof e
            }

            function a(e, t) {
                var n = null == e ? void 0 : e[t];
                return i(n) ? n : void 0
            }

            function o(e) {
                return s(e) && u.call(e) == r
            }

            function s(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return null == e ? !1 : o(e) ? g.test(d.call(e)) : n(e) && c.test(e)
            }

            var r = "[object Function]", c = /^\[object .+?Constructor\]$/, l = Object.prototype, d = Function.prototype.toString, h = l.hasOwnProperty, u = l.toString, g = RegExp("^" + d.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = a
        }, {}]
    }, {}, [12])
}(window.BetterTTV = window.BetterTTV || {});