"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PaywallOverlay from "./PaywallOverlay";
import { 
  ChevronDown, 
  Bell, 
  User, 
  Grid, 
  BookOpen, 
  BarChart3, 
  FileText, 
  TrendingUp, 
  Play, 
  File, 
  Info,
  Plus,
  Calendar,
  Euro,
  Filter,
  Clock,
  RefreshCw
} from "lucide-react";

export default function TradezellaDash() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className={`bg-[#1e293b] text-white transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="p-4">
          {/* Branding */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">T</span>
            </div>
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg">TRADEZELLA</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            )}
          </div>

          {/* Add Trade Button */}
          <Button 
            className="w-full bg-[#6853B5] hover:bg-[#5a4a9a] mb-6"
            onClick={() => setShowPaywall(true)}
          >
            {!sidebarCollapsed && <Plus className="w-4 h-4 mr-2" />}
            {!sidebarCollapsed ? "Add Trade" : <Plus className="w-4 h-4" />}
          </Button>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            {[
              { name: "Dashboard", icon: Grid, active: true },
              { name: "Daily Journal", icon: BookOpen },
              { name: "Trades", icon: BarChart3 },
              { name: "Notebook", icon: FileText },
              { name: "Reports", icon: TrendingUp, new: true },
              { name: "Playbooks", icon: File, new: true },
              { name: "Progress Tracker", icon: TrendingUp },
              { name: "Trade Replay", icon: Play },
              { name: "Resource Center", icon: File },
            ].map((item) => (
              <div
                key={item.name}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                  item.active ? 'bg-[#4332EB]' : 'hover:bg-gray-700'
                }`}
                style={{ cursor: 'pointer' }}
              >
                <item.icon className="w-5 h-5" />
                {!sidebarCollapsed && (
                  <div className="flex items-center space-x-2">
                    <span>{item.name}</span>
                    {item.new && <Badge className="bg-green-500 text-xs">NEW</Badge>}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* User Controls */}
          <div className="absolute bottom-4 left-4 flex space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700 cursor-pointer">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700 cursor-pointer">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Euro className="w-4 h-4" />
                <span>EUR</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Date range</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <span>Demo account</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 space-y-6">
          {/* Demo Banner */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Badge className="bg-orange-500 text-white">DEMO</Badge>
              <span className="text-gray-700">You are viewing Demo data. Ready to make this account yours?</span>
            </div>
            <Button 
              className="bg-[#4332EB] hover:bg-[#3a2bd4]"
              onClick={() => setShowPaywall(true)}
            >
              Choose plan
            </Button>
          </div>

          {/* Last Import */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Last import: Aug 05, 2025 04:08 PM</span>
            <Button variant="link" className="text-[#4332EB] p-0 h-auto">
              <RefreshCw className="w-4 h-4 mr-1" />
              Resync
            </Button>
          </div>

          {/* KPIs Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Net P&L */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-sm">Net P&L</CardTitle>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-xs text-gray-500">110</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">€13,470.16</div>
                <div className="w-4 h-4 bg-gray-300 rounded mt-2"></div>
              </CardContent>
            </Card>

            {/* Trade Win % */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-sm">Trade win %</CardTitle>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">31.78%</div>
                <div className="flex items-center justify-between mt-2 text-xs">
                  <span className="text-green-600">34</span>
                  <span className="text-blue-600">3</span>
                  <span className="text-red-600">73</span>
                </div>
              </CardContent>
            </Card>

            {/* Profit Factor */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-sm">Profit factor</CardTitle>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.81</div>
              </CardContent>
            </Card>

            {/* Day Win % */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-sm">Day win %</CardTitle>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">57.58%</div>
                <div className="flex items-center justify-between mt-2 text-xs">
                  <span className="text-green-600">19</span>
                  <span className="text-blue-600">2</span>
                  <span className="text-red-600">14</span>
                </div>
              </CardContent>
            </Card>

            {/* Avg Win/Loss Trade */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-sm">Avg win/loss trade</CardTitle>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.90</div>
                <div className="flex space-x-2 mt-2">
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">€882</div>
                  <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">-€226</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Zella Score */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Zella score</CardTitle>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <div className="text-white text-2xl font-bold">80.65</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Your Zella Score</div>
                  <div className="text-2xl font-bold">80.65</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '80.65%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span>20</span>
                    <span>40</span>
                    <span>60</span>
                    <span>80</span>
                    <span>100</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Tracker */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Progress tracker</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Info className="w-4 h-4 text-gray-400" />
                    <Button size="sm" className="bg-[#4332EB] hover:bg-[#3a2bd4]">Explore</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {Array.from({ length: 42 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded ${
                        i % 3 === 0 ? 'bg-blue-200' : 'bg-gray-100'
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>Less</span>
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded ${
                          i < 3 ? 'bg-blue-500' : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                  <span>More</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-sm text-gray-600">Today's score</span>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-2xl font-bold">0/5</div>
                  <Button size="sm" variant="outline" className="mt-2">Daily checklist</Button>
                </div>
              </CardContent>
            </Card>

            {/* Daily Net Cumulative P&L */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Daily net cumulative P&L</CardTitle>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gradient-to-t from-green-100 to-transparent rounded-lg relative">
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full h-32 bg-gradient-to-t from-green-500 to-green-300 rounded-lg"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
                    <span>-€2,000</span>
                    <span>€0</span>
                    <span>€2,000</span>
                    <span>€4,000</span>
                    <span>€6,000</span>
                    <span>€8,000</span>
                    <span>€10,000</span>
                    <span>€12,000</span>
                    <span>€14,000</span>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>05/01/23</span>
                  <span>09/19/23</span>
                  <span>10/18/23</span>
                  <span>06/19/24</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Net Daily P&L */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Net daily P&L</CardTitle>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2 mb-4">
                  <Button variant="default" size="sm">Recent trades</Button>
                  <Button variant="outline" size="sm">Open positions</Button>
                </div>
                <div className="text-center text-gray-500 py-8">
                  <p>No recent trades to display</p>
                </div>
              </CardContent>
            </Card>

            {/* Account Balance */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Account balance</CardTitle>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center text-gray-500 py-8">
                  <p>Account balance information</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chat Support */}
        <div className="fixed bottom-6 right-6">
          <Button size="icon" className="rounded-full bg-[#4332EB] hover:bg-[#3a2bd4]">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Paywall Overlay */}
      {showPaywall && (
        <PaywallOverlay
          onClose={() => setShowPaywall(false)}
          onSubscribe={(planName) => {
            console.log(`Subscribing to ${planName}`);
            // Handle subscription logic here without alert
            setShowPaywall(false);
          }}
          onDemo={() => {
            console.log("Demo already active");
            setShowPaywall(false);
          }}
        />
      )}
    </div>
  );
} 